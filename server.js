const { signToken, authenticateToken } = require('./jwtTokenLogic')
const express = require('express')
const cors = require('cors')
const path = require('path')
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())

const connectionUriMongoose = 'mongodb+srv://petr:150600Pm@cluster0.4xcyj.mongodb.net/login-form?retryWrites=true&w=majority'
mongoose.connect(connectionUriMongoose, {useNewUrlParser: true, useUnifiedTopology: true})
const UserSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true}
})
const User = mongoose.model('User', UserSchema)

const isUsernameInDb = async username => {
    const current_user = await User.find({username})
    return current_user.length !== 0
}

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'build')))
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })
    app.get('/signup', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
      })
  }

app.get("/api/", async (req, res, next) => {
        try {
            const user = {username: req.query.username, password: req.query.password}
            const userExists = await isUsernameInDb(user.username)
            if (!userExists) return res.status(404).json({message: 'Неверное имя пользователя или пароль'})
            const current_user = await User.find({'username': user.username})
            const isCorrectPassword = await bcrypt.compare(user.password, current_user[0].password)
            if (!isCorrectPassword) {
                res.status(400).json({message: 'Неверное имя пользователя или пароль'})
            } else {
                res.status(200).send({user: {username: current_user[0].username}, token: signToken(current_user[0].username)})
            }
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

app.post('/api/', async (req, res, next) => {
    try { 
        const newUser = req.body.user
        if (await isUsernameInDb(newUser.username) === true || !newUser.username || !newUser.password) {
            return  res.status(400).json({message: 'Имя пользователя должно быть уникальным, оно не должно быть пустой строкой, как и пароль.'})
        }
        newUser.password = await bcrypt.hash(newUser.password, 13)
        const createdUser = await User.create(newUser)
        res.status(201).send({user: createdUser, token: signToken(createdUser.username)})
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)})
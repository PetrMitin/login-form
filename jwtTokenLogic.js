const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
dotenv.config()

const signToken = username => jwt.sign({username}, process.env.TOKEN_SECRET, {expiresIn: '1h'})

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['Authorization']
    const jwtToken = authHeader && authHeader.split(' ')[1]
    if (!jwtToken) return res.sendStatus(401)
    jwt.verify(jwtToken, process.env.TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        next() 
    })
}

module.exports = {signToken, authenticateToken}

import { Component } from 'react'
import UsernameInput from './UsernameInput'
import PasswordInput from './PasswordInput'

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleUsernameInput = this.handleUsernameInput.bind(this)
        this.handlePasswordInput = this.handlePasswordInput.bind(this)
        this.submitExistingUser = this.submitExistingUser.bind(this)
        this.submitNewUser = this.submitNewUser.bind(this)
    }

    handleUsernameInput(e) {
        this.setState({username: e.target.value})
    }

    handlePasswordInput(e) {
        this.setState({password: e.target.value})
    }

    async submitExistingUser() {
        const urlToFetch = `http://localhost:4000/api?username=${this.state.username}&password=${this.state.password}`
        const res = await fetch(urlToFetch)
        const jsonRes = await res.json()
        if (res.ok) {
            this.props.setUser(jsonRes.user)
            localStorage.setItem('token', jsonRes.token)
            localStorage.setItem('username', jsonRes.user.username)
        } else {
            alert(jsonRes.message)
        }
    }

    async submitNewUser() {
        const urlToFetch = `http://localhost:4000/api/`
        const JSONData = JSON.stringify({
            user: {
                username: this.state.username,
                password: this.state.password
            }
        })
        const res = await fetch(urlToFetch, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSONData
        })
        const jsonRes = await res.json()
        if (res.ok) {
            this.props.setUser(jsonRes.user)
            localStorage.setItem('token', jsonRes.token)
            localStorage.setItem('username', jsonRes.user.username)
        } else {
            alert(jsonRes.message)
        }
    }

    render() {
        const submitUser = this.props.isNewUser ? this.submitNewUser : this.submitExistingUser
        return(
            <div className="form">
                <UsernameInput handleChange={this.handleUsernameInput} />
                <PasswordInput handleChange={this.handlePasswordInput} />
                <button type='submit' onClick={submitUser} className="btn waves-effect waves-light">Отправь данные</button>
            </div>
        )
    }
}

export default LoginForm
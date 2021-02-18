import {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LoginForm from './LoginForm'
import UserInfo from './UserInfo'
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {username: localStorage.getItem('username')},
      isLoggedIn: !!localStorage.getItem('token')
    }
    this.setCurrentUserAndLogIn = this.setCurrentUserAndLogIn.bind(this)
    this.logout = this.logout.bind(this)
  }

  setCurrentUserAndLogIn(user) {
    this.setState({user: user, isLoggedIn: true})
  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    this.setState({isLoggedIn: false})
  }

  render() { 
    const formRouter = <BrowserRouter>
                          <h1 className="card-title">Система регистрации</h1>         
                            <Switch>
                              <Route path="/" exact>
                              <div className="card-action">
                                <LoginForm isNewUser={false} setUser={this.setCurrentUserAndLogIn} />
                                </div>
                                <p>Нет аккаунта? <a href="/signup">Зарегистрируйся</a></p>
                              </Route>
                              <Route path="/signup" exact>
                              <div className="card-action">
                                <LoginForm isNewUser={true} setUser={this.setCurrentUserAndLogIn} />
                                </div>
                                <p>Уже есть аккаунт? <a href="/">Войти</a></p>
                              </Route>
                            </Switch>
                        </BrowserRouter>
    return (
      <div className="App">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                {this.state.isLoggedIn ? 
                <UserInfo username={this.state.user.username} logout={this.logout} />
                : formRouter}
              </div>
            </div>
      </div>
    );
  }
}

export default App;

const PasswordInput = props => {
    return (
    <div className="input password-input">
        <label>
        <p>Введи пароль</p>
        <input type='password' onChange={props.handleChange} />
        </label>
    </div>)
}
export default PasswordInput
const UsernameInput = props => {
    return (
    <div className="input username-input">
        <label>
        <p>Введи имя пользователя</p>
        <input type='text' onChange={props.handleChange} />
        </label>
    </div>)
}
export default UsernameInput
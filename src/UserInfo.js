import React from 'react'

const UserInfo = props => {
    return(
    <div>
        Имя: {props.username} <br/>
        <button onClick={props.logout} className="btn waves-effect waves-light">Выйти</button>
    </div>)
}

export default UserInfo
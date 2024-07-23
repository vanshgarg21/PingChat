import React from 'react'
import "./Message.css"

const Message = ({ user, message, classs }) => {
    if (user) {
        return (
            <div className={`messageBox ${classs}`}>
                <p>{`${user}:`}</p>{`${message}`}
            </div>
        )
    }
    else {
        return (
            <div className={`messageBox ${classs}`}>
                <p>{`You:`}</p>{`${message}`}
            </div>
        )
    }
}

export default Message
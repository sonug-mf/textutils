import React from 'react'

function Alert({ type, message, ...props }) {
    return (
        <div className={`alert alert-${type}`} role="alert">{message}</div>
    )
}

export default Alert

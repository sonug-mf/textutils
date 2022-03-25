import React from 'react'

import './Button.css'

export default function Button({ type, className, text, clickHandler, ...props }) {

    return (
        <button type={type} className={`btn btn-${className}`} onClick={clickHandler}>{text}</button>
    )
}

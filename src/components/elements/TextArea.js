import React from 'react'

export default function TextArea({ label, rows, value, changeHandler, ...props }) {
    return (
        <>
            <label className="form-label">{label}</label>
            <textarea className="form-control" placeholder='Enter Your Message' rows={rows} value={value} onChange={changeHandler}></textarea>
        </>
    )
}


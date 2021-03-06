import React from 'react'

const Input = ({ name, label, error, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlfor={name}>{label}</label>
            <input
                {...rest}
                className="form-control"
                id={name}
                name={name}
                placeholder="enter username"
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}

export default Input;
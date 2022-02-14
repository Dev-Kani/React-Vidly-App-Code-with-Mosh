import { options } from 'joi-browser';
import React from 'react'

const Select = ({ name, label, error, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlfor={name}>{label}</label>
            <select name={name} id={name} {...rest} className="form-control">
                <option value="" />
                {options.map(option => (
                    <option key={option._id} value={option._id}>
                        {option.name}
                    </option>
                ))}
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}

export default Select;
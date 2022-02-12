import React, { Component } from 'react'
import Joi from 'joi-browser';
import Form from './common/Form';

export class Register_Form extends Form {

    state = {
        data: { username: '', password: '', name: '' },
        errors: {}
    };


    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().min(5).label("Password"),
        name: Joi.string().required().label("Name")
    }





    doSubmit = () => {
        // Call the server
        console.log("Submitted")
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderInput('name', 'Name')}
                    {this.renderButton("Register")}
                </form>
            </div>
        )
    }
}

export default Register_Form;
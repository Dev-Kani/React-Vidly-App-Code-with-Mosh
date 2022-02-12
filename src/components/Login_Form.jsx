import React, { Component } from 'react'
import Joi from 'joi-browser';
import Form from './common/Form';

export class Login_Form extends Form {

    state = {
        data: { username: '', password: '' },
        errors: {}
    };


    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
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
                    {this.renderButton("Login")}
                </form>
            </div>
        )
    }
}

export default Login_Form
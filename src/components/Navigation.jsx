import React from 'react'
import { Route, } from 'react-router'
import { Link, NavLink } from 'react-router-dom'
import { Customers } from './Customers'
import Login_Form from './Login_Form'
import { Rentals } from './Rentals'
import Register_Form from './Register_Form'

export const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="#">Vidly</Link>

            <div className="navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/movies">Movies<span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/customers" component={Customers}>Customers</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/rentals" component={Rentals}>Rentals</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login" component={Login_Form}>Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register" component={Register_Form}>Register</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

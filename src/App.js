import React, { Component } from 'react';
import Movies from "./components/Movies"
import Counters from "./components/Counters"
import NavBar from './components/Navbar';
import { Route, Redirect, Switch } from 'react-router-dom'
import { Customers } from './components/Customers';
import { Rentals } from './components/Rentals';
import { Not_Found } from './components/Not_Found';
import { Navigation } from './components/Navigation';
import Movie_Form from './components/Movie_Form'
import Login_Form from './components/Login_Form';
import Register_Form from './components/Register_Form';

class App extends React.Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters: counters });
    };

    render() {
        return <main className="container">
            <Navigation />
            <Switch>
                <Route path="/register" component={Register_Form}></Route>
                <Route path="/login" component={Login_Form}></Route>
                <Route path="/movies/:id" component={Movie_Form}></Route>
                <Route path="/movies" component={Movies}></Route>
                <Route path="/customers" component={Customers}></Route>
                <Route path="/rentals" component={Rentals}></Route>
                <Route path="/not-found" component={Not_Found}></Route>
                <Redirect from="/" exact to="/movies" />
                <Redirect to="/not-found" />
            </Switch>
            <hr />
            <NavBar
                totalCounters={this.state.counters.filter(c => c.value > 0).length}
            />
            <Counters
                counters={this.state.counters}
                onReset={this.handleReset}
                onIncrement={this.handleIncrement}
                onDelete={this.handleDelete}
                onDecrement={this.handleDecrement}
            />
        </main>;
    }
}

export default App;
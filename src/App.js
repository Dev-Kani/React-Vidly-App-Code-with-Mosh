import React, { Component } from 'react';
import Movies from "./components/Movies"
import Counters from "./components/Counters"
import NavBar from './components/Navbar';

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
        const counters = this.state.counters.map (c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: counters});
    };

    render() { 
        return <main className="container">
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
            <hr />
            <Movies />
        </main>;
    }
}
 
export default App;
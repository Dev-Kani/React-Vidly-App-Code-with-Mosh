import React, { Component } from 'react';
import Counter from './Counter';


class Counters extends React.Component {
    
    
    render() {
        const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props;
        
        return (
            <div>
                <button 
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2">Reset
                </button>
                {counters.map(counter => (
                    <Counter 
                        key={counter.id} 
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        counter={counter}
                        onDecrement={onDecrement}
                    /> 
                ))}
            </div>
        );
    }
}
 
export default Counters;
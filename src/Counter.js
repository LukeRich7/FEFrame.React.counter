import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {

  increment = () => {
    this.props.dispatch({
      type:'Increment'
    });
  }

  decrement = () => {
    this.props.dispatch({
      type: 'Decrement'
    });
  }

  reset = () => {
    this.props.dispatch({
      type: 'Reset'
    });
  }
  
  plus5 = () => {
    this.props.dispatch({
      type: 'Plus5'
    });
  }

  minus10 = () => {
    this.props.dispatch({
      type: 'Minus10'
    });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.plus5}>Add 5</button>
          <button onClick={this.minus10}>Subtract 10</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}


export default connect(mapStateToProps)(Counter);
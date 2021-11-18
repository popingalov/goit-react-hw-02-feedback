/* import s from './Counter.module.css'; */
import React from 'react';
import Control from './Control';

export default class Counter extends React.Component {
  static defaultProps = {
    startValue: 0,
  };

  state = {
    value: this.props.startValue,
    stopInterval: null,
  };

  inc = () => {
    this.setState(prev => ({
      value: prev.value + 1,
    }));
  };

  dec = () => {
    this.setState(prev => ({
      value: prev.value - 1,
    }));
  };

  incSet = () => {
    this.setState({
      stopInterval: setInterval(() => {
        this.setState(prev => ({ value: prev.value + 1 }));
      }, 150),
    });
  };

  decSet = () => {
    this.setState({
      stopInterval: setInterval(() => {
        this.setState(prev => ({ value: prev.value - 1 }));
      }, 150),
    });
  };

  stopCounter = () => {
    clearInterval(this.state.stopInterval);
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__controls">{this.state.value}</span>

        <Control
          onInc={this.inc}
          onDec={this.dec}
          onIncSet={this.incSet}
          onDecSet={this.decSet}
          onSopCounter={this.stopCounter}
        />
      </div>
    );
  }
}

import * as React from 'react';
import {Component} from 'react';
import {number} from 'prop-types';

interface IState {
  counter: number;
  error: string;
}

interface IProp {

}

class Counter extends Component<IProp, IState> {
  state = {
    counter: 0,
    error: ''
  };

  constructor(props: object) {
    super(props);
  }

  increaseCounter() {
    let state: IState = {
      error: '',
      counter: 0
    };

    if (this.state.counter === 0) {
      state.error = '';
    }
    state.counter = this.state.counter + 1;

    this.setState(state);
  }

  decreaseCounter() {
    let state: IState;

    state = {...this.state};
    if (this.state.counter === 0) {
      state.error = 'counter reached minimum value';
      state.counter = 0;
    } else {
      state.counter = this.state.counter - 1;
    }
    this.setState(state);
  }

  render() {
    return (
      <div data-test='component-counter'>
        <h1 data-test='counter-display'>Counter value is {this.state.counter}</h1>
        { this.state.error.length > 0 && <h2 data-test='counter-error'>{this.state.error}</h2> }
        <button data-test='counter-increment-button' onClick={() => this.increaseCounter()}>increase</button>
        <button data-test='counter-decrement-button' onClick={() => this.decreaseCounter()}>decrease</button>
      </div>
    );
  }
}

export default Counter;

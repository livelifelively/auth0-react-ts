import * as React from 'react';
import { Component } from 'react';
import { Provider } from 'react-redux';

import Counter from './components/counter/counter';
import store from './store/index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;

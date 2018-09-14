import * as React from 'react';
import Todos from '../Todos';
import './App.css';


class App extends React.Component {
  public render() {
    return (
      <div className="container">
        <h1>Todos</h1>
        <Todos />
      </div>
    );
  }
}

export default App;

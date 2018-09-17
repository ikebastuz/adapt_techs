import * as React from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../../actions';
import Todos from './component';


interface ITodosProps {
  getTodos: () => void;
}

interface ITodosState {
  todos: any;
}
/*
const mapDispatchToProps = () => {
  getTodos
}
*/
const masStateToProps = ({state} :any) => {
  todos: state.todo.data
}

export default connect(
  masStateToProps,
  { getTodos }
)(
  class extends React.Component<ITodosProps, ITodosState> {
    constructor(props: ITodosProps){
      super(props);
      this.state = {
        todos: []
      }
    }
    render() {
      return <Todos 
        todos={this.state.todos}
        loadTodos={this.props.getTodos} 
      />;
    }
  }
);

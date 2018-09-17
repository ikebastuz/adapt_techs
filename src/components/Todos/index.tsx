import * as React from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../../actions';
import Todos from './component';


interface ITodosProps {
  getTodos: () => void,
  todos: any
}

interface ITodosState {
  todos: any;
}
/*
const mapDispatchToProps = () => {
  return { getTodos }
}
*/
const masStateToProps = (state :any) => {
  return {todos: state.todo.data}
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
    componentWillReceiveProps(nextProps:ITodosProps){
      if(nextProps.todos){
        this.setState({todos: nextProps.todos})
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

import * as React from 'react';
import { connect } from 'react-redux';
import { GetTodosList } from '../../saga/sagas';
import Todos from './component';


interface ITodosProps {
  GetTodosList: () => void;
}

interface ITodosState {
  todos: any;
}

export default connect(
  null,
  { GetTodosList }
)(
  class extends React.Component<ITodosProps, ITodosState> {
    constructor(props: ITodosProps){
      super(props);
      this.state = {
        todos: []
      }
    }
    public componentWillMount() {
      this.props.GetTodosList();
    }
    public render() {
      return <Todos param="value" todos={this.state.todos} />;
    }
  }
);

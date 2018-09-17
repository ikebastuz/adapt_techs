import * as React from 'react';

interface ITodosProps {
  todos: [object],
  loadTodos: () => void
}

const Todos: React.SFC<ITodosProps> = props => {
  const { todos, loadTodos } = props;
  return ( 
    <div>
      {todos.length > 0 ? null : (
        <button onClick={loadTodos}>LOAD TODOS</button>
      )}
      
    </div>
  )
}
export default Todos;

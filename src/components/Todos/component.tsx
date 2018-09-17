import * as React from 'react';

interface ITodosProps {
  todos: [any],
  loadTodos: () => void
}

const Todos: React.SFC<ITodosProps> = props => {
  const { todos, loadTodos } = props;
  return ( 
    <div>
      {todos.length > 0 ? (
        <p>{todos[0].title}</p>
      ) : (
        <button onClick={loadTodos}>LOAD TODOS</button>
      )}
    </div>
  )
}
export default Todos;

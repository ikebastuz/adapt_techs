import * as React from 'react';

interface ITodosProps {
  todos: [any];
  loadTodos: () => void;
  toggleDone: (id:number) => void;
}

const Todos: React.SFC<ITodosProps> = (props) => {
  const { todos, loadTodos, toggleDone } = props;
  return (
    <div className="todos-list">
      {todos.length > 0 ? (
        todos.map((todo, ind) => {
          return (
            <p 
              key={todo.id} 
              className={todo.completed ? 'done' : 'undone'}
              onClick={() => toggleDone(todo.id)}
            >
              {ind + 1}. {todo.title}
            </p>
          );
        })
      ) : (
        <button onClick={loadTodos}>LOAD TODOS</button>
      )}
    </div>
  );
};
export default Todos;

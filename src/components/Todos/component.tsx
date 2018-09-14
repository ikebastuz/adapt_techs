import * as React from 'react';

interface ITodosProps {
  param: string,
  todos: [object]
}

const Todos: React.SFC<ITodosProps> = props => {
  const { param } = props;
  return ( 
    <div>
      <p>Param: {param}</p>
    </div>
  )
}
export default Todos;

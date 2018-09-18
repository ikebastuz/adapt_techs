interface ITodo {
  id: number;
  completed: boolean;
  title: string;
  userId: number;
}

export const toggleTodo = (list:[ITodo], id:number) => {
  return list.map(todo => {
    if(todo.id === id){
      todo.completed = !todo.completed
    }
    return todo;
  });
};
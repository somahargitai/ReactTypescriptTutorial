/* 
Using Typescript with modern React (i.e. hooks, context, suspense)
https://youtu.be/BnIhk4igd8I 
*/
import React, { Fragment, useState } from "react";

type Props = {};
type FormElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  complete: boolean;
}
// difference:  interface is not a reference but a new type. Type is just a reference

interface ITodo2 extends ITodo {
  tags: string[];
}

export const ToDoList: React.FC<Props> = (props: Props) => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault(); // we don't want to refresh the page on submit (which normally happens)
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }]; // ..., because we keep the old todo values
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1); // [1,2,3].splice(2,1) is removing one element from the second element
    setTodos(newTodos);
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <button type="submit">Add todo</button>
        <button type="button"> Do nothing</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => (
          <Fragment key={index}>
            <div>
              <span style={{ textDecoration: todo.complete ? "line-through" : "" }}>
                {todo.text}
              </span>
              <button type="button" onClick={() => completeTodo(index)}>
                {" "}
                {todo.complete ? "Incomplete" : "Complete"}
              </button>
              <button type="button" onClick={() => removeTodo(index)}>
                &times;
              </button>
            </div>
          </Fragment>
        ))}
      </section>
    </Fragment>
  );
};

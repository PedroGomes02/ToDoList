import React, { useState } from "react";
import "./App.css";
import { StyledForm, StyledLI, StyledUL, ToDoListContainer } from "./styles";

export default function App() {
  const [list, setList] = useState<string[]>([]);

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    setList([...list, target.task.value]);
    target.reset();
  };

  const handlerClickRemove = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const currentList = [...list];
    currentList.splice(target.value, 1);
    setList(currentList);
  };

  const handlerClickDone = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const currentList = [...list];
    currentList[target.value] = currentList[target.value] + " - Done";
    setList(currentList);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <StyledForm onSubmit={handlerSubmit}>
        <input type="text" name="task" required placeholder="Add a new task" />
        <button>Add Task</button>
      </StyledForm>
      <ToDoListContainer>
        <h2>Don't forget to do:</h2>
        <StyledUL>
          {list.map((element, index) => {
            return (
              <StyledLI key={index}>
                <span>{element}</span>
                <button value={index} onClick={handlerClickRemove}>
                  Remove
                </button>
                <button value={index} onClick={handlerClickDone}>
                  Task Done!
                </button>
              </StyledLI>
            );
          })}
        </StyledUL>
      </ToDoListContainer>
    </div>
  );
}

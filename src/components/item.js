import { useState } from "react";
import ItemEdit from "./item-edit.js";
const Item = ({ filterTodo, setTodos, todos }) => {

  //Toggle State
  const [toggleState, setToggleState] = useState(false);
  //Checkbox Handler.
  const checkboxHandler = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((perPrevTodo) => {
        return perPrevTodo.id === id
          ? { ...perPrevTodo, isChecked: !perPrevTodo.isChecked }
          : perPrevTodo;
      })
    );
  };

  // Remove an item from todo list
  const removeHandler = (id) => {
    const newTodoList = todos.filter((perTodoItem) => perTodoItem.id !== id);
    setTodos(newTodoList);
  };

  //Select all todos 
  const toggleAll = () => {
  
    const newTodos =   todos.map((perTodos) => {
        if (toggleState === false) {
          setToggleState(true);
          return { ...perTodos, isChecked: true };
        }
        else  {
            setToggleState(false);
          return { ...perTodos, isChecked: false };
        }
      })
      setTodos(newTodos)
  
  };

  //Change label state make an editable
  const editLabel = (id) => {
   const editTodo =  todos.map((editPerTodo) =>editPerTodo.id === id ? {...editPerTodo,isEditable : true} : editPerTodo )
    setTodos(editTodo)
  }

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all" onClick={toggleAll}>
        Mark all as complete
      </label>
      <ul className="todo-list">
        {filterTodo.map((perTodo) => {
          const { id, isChecked, text , isEditable } = perTodo;
          return (
            <li className={isChecked === true ? "completed" : ""} key={id}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  onChange={() => checkboxHandler(id)}
                  checked={isChecked}
                />
               {isEditable ? <ItemEdit id={id} todos={todos} text={text} setTodos={setTodos} />  : <label onClick={() => editLabel(id)}>{text}</label>}
                <button
                  className="destroy"
                  onClick={() => removeHandler(id)}
                ></button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Item
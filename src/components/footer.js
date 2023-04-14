import { useRef } from "react";

const Footer = ({ myStatus, setMyStatus ,todos,setTodos,counter}) => {
	
	const disable = useRef(null)

	 disable.current=todos.every((todo) => todo.isChecked === false);
		
	const clearCompleted = () => {
		const newTodos = todos.filter((pre) => pre.isChecked===false)
		setTodos(newTodos)
	}

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{counter} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={myStatus === "all" ? "selected" : ""}
            onClick={() => {
              setMyStatus("all");
            }}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={myStatus === "active" ? "selected" : ""}
            onClick={() => {
              setMyStatus("active");
            }}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={myStatus === "completed" ? "selected" : ""}
            onClick={() => {
              setMyStatus("completed");
            }}
          >
            Completed
          </a>
        </li>
      </ul>
     {!disable.current && <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>}
    </footer>
  );
};
export default Footer;
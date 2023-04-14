const Header = ({ setText, setTodos, text }) => {
  //Getting keys from input
  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  //Adding Todo
  const addTodo = (e) => {
    e.preventDefault();
    if(text === "") return
    setTodos((pre) => [
      ...pre,
      {
        text,
        id: new Date().getTime().toString(),
        isChecked: false,
        isEditable:false,
      },
    ]);
    setText("");
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={addTodo}>
        <input
          className="new-todo"
          onChange={onChangeHandler}
          placeholder="What needs to be done?"
          autoFocus
          value={text}
        />
      </form>
    </header>
  );
};
export default Header;
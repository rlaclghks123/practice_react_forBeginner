import { useState } from "react";



function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);


  const onChange = (event) => {
    setToDo(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  }

  const onClick = (index) => {
    setToDos(toDos.filter((item, key) => index !== key));
  }
  return (
    <div>
      <h1>{toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} type="text" onChange={onChange} placeholder="Write To Do"></input>
        <button>Add To Do</button>
        <ul>
          {toDos.map((item, key) => <li key={key}>{item}
            <button onClick={() => onClick(key)}>❌</button>
          </li>)}
        </ul>
      </form>
    </div>
  );
}

export default App;

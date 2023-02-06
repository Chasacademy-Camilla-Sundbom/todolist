import { useState } from "react";
import "./App.css";
let count = 1


function App() {
  //1. skapa todolist state
  //2. visa listan i html-koden. Använd list.map(). Se hacker stories.
  //3. lägg till nya objekt till arrayen med ett input fält och en add knapp.
  //

  const [list, setList] = useState([{ title: "Diska", done: false, id:0 }]);
  const [text, setText] = useState();

  // spara till en variabel
  function handleChange(event) {
    setText(event.target.value);

    //text = event.target.value;
  }
  function handleDone(id, done) {
    const newList = [...list];
    for (let i = 0; i < newList.length; i++) {
      const item = newList[i];
      if (item.id == id) {
        item.done = !done;
      }
    }
    setList(newList);
    
  }
  function handleDelete(id) {
    setList(list.filter(todo => todo.id !== id));
    
  }
  // använd den sparade variabeln text och skapa ett objekt med titel = den sparade variabeln
  function handleAdd() {
    const todo = {
      title: text,
      done: false,
      id: count ++
    };

    const newList = [...list];
    newList.push(todo);

    setList(newList);
    // här används setList på slutet.
  }

  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>

      {list.map((item) => {
        return (
          <div className={item.done && "done"}>
            {item.title} {item.id} {item.done ? "Done" : "Not Done"}
            <button onClick={() => handleDone(item.id, item.done)}>
              {item.done ? "Undo" : "Done"}
            </button>
            <button onClick={() => handleDelete (item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.scss";

function App() {
  const [currentTask, setCurrentTask] = useState({
    text: "",
    isDone: false,
  });

  const [allTasks, setAllTasks] = useState([]);

  const handelChange = (e) => {
    setCurrentTask({ ...currentTask, text: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setAllTasks([...allTasks, currentTask]);
    setCurrentTask("");
  };

  const handelDelete = (clickedIndex) => {
    let restTasks = allTasks.filter((element, j) => clickedIndex !== j);
    setAllTasks(restTasks);
    /*console.log("i =", clickedIndex);*/
  };

  const handelDone = (indexDone) => {
    let markedList = allTasks.map((item, k) =>
      indexDone === k ? { ...item, isDone: !item.isDone } : item
    );
    setAllTasks(markedList);
  };

  return (
    <div className="App">
      <div className="todo">
        <h2>To do List</h2>
        <form onSubmit={handelSubmit}>
          <input
            type="text"
            value={currentTask.text}
            onChange={handelChange}
            required
          />
          <button className="submit">add</button>
        </form>

        <ul>
          {allTasks.map((item, i) => (
            <div className="list">
              <li className={item.isDone ? "strike" : "black"} key={i}>
                {item.text}
                <span className="btn">
                  <button className="done" onClick={() => handelDone(i)}>
                    done
                  </button>
                  <button className="delete" onClick={() => handelDelete(i)}>
                    Delete
                  </button>
                </span>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

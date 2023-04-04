import { useEffect, useRef, useState } from "react";
import "./App.css";
import { BsFillCheckCircleFill, BsCheckLg } from "react-icons/bs";
import axios from "axios";

const Todo = ({ id, title, fetchTodos }) => {
  const [checked, setChecked] = useState(false);
  const [hover, setHover] = useState(false);
  const inputRef = useRef();
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const deleteTodo = async () => {
    const res = await axios.delete(`http://localhost:5000/${id}`);
    if (res.status === 200) {
      await fetchTodos();
      console.log("delete successfull");
    }
  };
  return (
    <div
      className="flex justify-between mx-9 item-center"
      onClick={handleClick}
    >
      <p className="mb-2 text-[14px]">{title}</p>
      <div
        className="flex item-center mt-1"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={deleteTodo}
      >
        {hover ? <BsFillCheckCircleFill /> : <BsCheckLg />}
      </div>
      <input
        ref={inputRef}
        type="checkbox"
        className="hidden"
        onChange={(e) => setChecked(e.target.checked)}
      />
    </div>
  );
};

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const fetchTodos = async () => {
    const res = await axios.get("http://localhost:5000");
    setTodoList(res.data);
  };

  const saveTodo = async () => {
    const res = await axios.post("http://localhost:5000", {
      title: newTodo,
    });
    if (res.status === 200) {
      await fetchTodos();
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="bg-background h-screen w-screen pt-7.5">
      <div className="bg-white w-300 h-510 mx-auto relative">
        <div className="flex justify-between p-6 items-center">
          <div className="flex items-center gap-2">
            <p className="text-xl">12</p>
            <div>
              <p className="text-xs">January</p>
              <p className="text-xs">2022</p>
            </div>
          </div>
          <div className="text-sm">Tuesday</div>
        </div>
        <div>
          {todoList.map((todo) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                fetchTodos={fetchTodos}
              />
            );
          })}
          {todoList.length < 11 ? (
            <input
              onKeyDown={async (e) => {
                if (e.key === "Enter") {
                  await saveTodo();
                  setNewTodo("");
                }
              }}
              autoFocus="autofocus"
              maxLength="22"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="mx-9 bg-transparent focus-visible:outline-none text-sm"
            />
          ) : null}
        </div>
        <div className="absolute -bottom-6 flex justify-center w-full">
          <button
            tabIndex={0}
            onClick={() => {
              const newList = [...todoList];
              newList.push(newTodo);
              setTodoList(newList);
              setNewTodo("");
            }}
            className="h-60 w-60 text-center rounded-100 text-35 font-medium pb-60 bg-enter text-plus focus-visible:outline-none "
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

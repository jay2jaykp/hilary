import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { BsCup, BsCupHotFill } from "react-icons/bs";

const Todo: React.FC<{
  title: string;
  id: number;
  completed: boolean;
  updateList: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        title: string;
        createdAt: string;
        updatedAt: string;
        completed: boolean;
      }[]
    >
  >;
}> = ({ title, id, completed, updateList }) => {
  const [checked, setChecked] = useState(completed);
  const [hover, setHover] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // inputRef gives you ability to do something similar to document.getElementById
  const handleClick = async () => {
    console.log("click");
    const res = await axios.post(`http://localhost:3001/completed/${id}`, {
      completed: true,
    });

    if (res.status === 200) {
      const allTodos = await axios.get("http://localhost:3001/");
      updateList(allTodos.data);
    }
  };

  if (completed) {
    return null;
  }

  return (
    <div className="flex justify-between mx-8 mb-3" onClick={handleClick}>
      <p>{title}</p>
      <div
        className="flex items-center "
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover ? <BsCupHotFill /> : <BsCup className="mt-1.5" />}
      </div>
      <input
        ref={inputRef}
        className="hidden"
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </div>
  );
};

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState<
    {
      id: number;
      title: string;
      createdAt: string;
      updatedAt: string;
      completed: boolean;
    }[]
  >([]);

  const fetchTodos = async () => {
    const res = await axios.get("http://localhost:3001/");
    setTodoList(res.data);
    // console.log(res.data);
  };

  const saveTodo = async () => {
    const res = await axios.post("http://localhost:3001/", {
      title: newTodo,
    });
    if (res.status === 200) {
      setNewTodo("");
      fetchTodos();
    }
  };

  useEffect(() => {
    // alert("hello");
    fetchTodos();
  }, []);
  return (
    <div className="bg-green-200 w-screen h-screen pt-44">
      <div className="bg-red-200 relative w-80 h-96 mx-auto">
        {/* <div className="relative h-full"> */}
        <div className="flex justify-between p-6 items-center">
          <div className="flex gap-2 items-center">
            <p className="text-5xl">12</p>
            <div className="text-sm">
              <p>DEC</p>
              <p className="mt-[0.3rem]">2022</p>
            </div>
          </div>
          <div>Tuesday</div>
        </div>
        <div>
          {todoList.map((el, idx) => {
            return (
              <Todo
                key={idx}
                title={el.title}
                id={el.id}
                completed={el.completed}
                updateList={setTodoList}
              />
            );
          })}

          {todoList.length < 7 ? (
            <input
              // defaultValue={newTodo}
              value={newTodo}
              onChange={(e) => {
                // console.log(e.target.value);
                setNewTodo(e.target.value);
              }}
              className="mx-8 bg-transparent border-b-2 border-black focus-visible:outline-none"
            />
          ) : null}
        </div>
        <div className="absolute -bottom-6 flex justify-center w-full">
          <button
            className="text-xl p-3 px-5 rounded-full bg-green-500"
            onClick={saveTodo}
            // onClick={() => {
            //   // grab the text from the input
            //   // then add into the todo list
            //   const newTodoList = [...todoList]; // deep copy
            //   newTodoList.push(newTodo); // manipulate
            //   setTodoList(newTodoList); // update state

            //   // remove the text from the input
            //   setNewTodo("");
            // }}
          >
            +
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;

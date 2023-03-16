import { useEffect, useRef, useState } from "react";
import { BsCup, BsCupHotFill } from "react-icons/bs";

const Todo: React.FC<{
  title: string;
  updateList: React.Dispatch<React.SetStateAction<string[]>>;
}> = ({ title, updateList }) => {
  const [checked, setChecked] = useState(false);
  const [hover, setHover] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // inputRef gives you ability to do something similar to document.getElementById
  const handleClick = () => {
    console.log("click");
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  return (
    <div className="flex justify-between mx-8 mb-3" onClick={handleClick}>
      <p>{title}</p>
      <div
        className="flex items-center bg-red-300"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover ? <BsCupHotFill /> : <BsCup className="mt-1.5" />}
      </div>
      <input
        ref={inputRef}
        className="hidden"
        type="checkbox"
        onChange={(e) => setChecked(e.target.checked)}
      />
    </div>
  );
};

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState<string[]>([
    "hello",
    "world",
    "how",
    "todo",
    "list",
  ]);
  // useEffect(() => {
  //   // alert("hello");
  //   console.log("hello world");
  // }, []);
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
            return <Todo key={idx} title={el} updateList={setTodoList} />;
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
            onClick={() => {
              // grab the text from the input
              // then add into the todo list
              const newTodoList = [...todoList]; // deep copy
              newTodoList.push(newTodo); // manipulate
              setTodoList(newTodoList); // update state

              // remove the text from the input
              setNewTodo("");
            }}
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

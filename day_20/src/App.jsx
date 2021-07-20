import "./styles.css";
import {useState, useEffect} from "react"

const Todo = ({todo,todos, setTodos, index}) =>{
return(
<div className="list" >
<h2 className="todo">{todo}</h2>
<button onClick={() =>{
console.log("Deleted = ", todo)
const newTodos = todos.filter((el, i) => i != index)
setTodos(newTodos)
}}>Delete</button>
</div>
)
}

export default function App(props) {
const [value, setValue] = useState("")
const [todos, setTodos] = useState(["Complete THA day 20", "Get you THA checked by TL"])
useEffect(() => {
setTodos ([])
}, [])
  return (
    <div className="App">
<h2>Add something</h2>
      <input type="text" onChange={(e) => {
        setValue(e.target.value)
        // console.log(value)
      }}
      value = {value}
      />
      <button onClick={() => {
        setTodos([...todos, value])
        setValue("")
      }}>Add</button>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} todos={todos} setTodos={setTodos} index={index} />
      ))}
    </div>
  );
}

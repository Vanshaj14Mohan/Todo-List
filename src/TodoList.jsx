import { useState } from "react";

function TodoList(){
    let [todos, setTodos] = useState(["sample case"]);
    let [newTodo, SetNewTodo] = useState(""); //for tracking new tasks

    let addNewTask = ()=>{
        setTodos([...todos, newTodo]);
        SetNewTodo("");
    }

    let updateTodoValue = (event) => { //to update our new todo
        SetNewTodo(event.target.value);
    }

    return(
        <div>
            <input placeholder="Add a Task" value={newTodo} onChange={updateTodoValue}></input>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>

           <hr></hr>
            <h4>Tasks to do</h4>
            <ul>
                {
                    todos.map((todo)=>(
                     <li>{todo}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TodoList;
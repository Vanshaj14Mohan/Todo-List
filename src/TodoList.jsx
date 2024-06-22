import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; //for unique id's

function TodoList(){
    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4(), isDone: false }]); //making an array of object
    let [newTodo, SetNewTodo] = useState(""); //for tracking new tasks

    let addNewTask = ()=>{
        setTodos((prevTodos)=>{ //using callback
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone:false }];
        });
        SetNewTodo("");
    }

    let updateTodoValue = (event) => { //to update our new todo
        SetNewTodo(event.target.value);
    }

    let deleteTodo = (id) =>{ //will take an id and delete it 
        setTodos((prevTodos) =>todos.filter((prevTodos) => prevTodos.id != id)); //using filter method
    }

   let markAllDone =() =>{
    setTodos( (prevTodos) => prevTodos.map((todo) =>{
        return {
            ...todo,
            isDone: true,
        }
    })
    );
   };

   let markAsDone = (id) =>{
    setTodos( (prevTodos) => prevTodos.map((todo) =>{
        if(todo.id === id){
            return {
                ...todo,
                isDone: true,
            };
        } else{
            return todo;
        }
    })
    );
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
                     <li key={todo.id}>
                       <span style={todo.isDone ? {textDecoration: "line-through"}: {}}>{todo.task}</span>
                       &nbsp; &nbsp;
                       <button onClick={ ()=> deleteTodo(todo.id)}>Delete</button>
                       <button onClick={ ()=> markAsDone(todo.id)}>Mark As Done</button>
                        </li>
                    ))
                }
            </ul>
            <br></br>

            <button onClick={markAllDone}>Mark All as Done</button>
        </div>
    );
}

export default TodoList;
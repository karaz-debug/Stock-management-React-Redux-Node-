import React from 'react'

const TempTry = (props) => {
    const [todos, setTodos] = React.useState([
      {name: 'A', done: false},
      {name: 'B', done: false},
      {name: 'C', done: false},
      {name: 'D', done: false},
      {name: 'E', done: false},
    ])
  
    const handleClick = (index) => {
    
    
      let tempTodos = todos.slice();
      tempTodos.splice(index,1);
      setTodos(tempTodos);
    }
    console.log(todos)
    return (
      <>
          {todos.map((todo,index) => {
          return (
            <button type="button" style={{margin:'10px'}} 
    onClick={() => handleClick(index)}
      className="btn btn-danger"><i className="fa fa-minus"></i>{todo.name}</button>
            )
          }
          )}
        </>
     
    )
  }
  export default TempTry;
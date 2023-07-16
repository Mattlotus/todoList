import React from 'react'

function Todolist(props) {
  return (
     <ol>
     {props.todos.map((listItem)=>{
        return (
            <li>
                {listItem}
            </li>    
        )
     })}
     </ol>
  )
}

export default Todolist

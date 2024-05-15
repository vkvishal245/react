import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addTodo, updateTodo, editTodo} from '../Feature/todoSlice'


function Todos() {
    const [input, setinput] = useState('')
    const dispatch = useDispatch();
    const Edits = useSelector((state)=>state.edits)
  useEffect(() => {
  if(Edits.id !== null){
    setinput(Edits.text)

  }else{
    setinput('')
  }
  }, [Edits])
  
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(Edits.id !== null){
          dispatch(updateTodo(
            {
              id:Edits.id,
            text:input
            }
          ))
          dispatch(editTodo({
            id:null,
            text:''
          }))
        }else{
          dispatch(addTodo(input));
        }
       
        setinput('')
    }
  return (
    <div className="p-4">
    <form onSubmit={handleSubmit} className="flex align-middle">
      <input
        type="text"
        placeholder="Write todo"
        value={input}
        onChange={(e) => setinput(e.target.value)}
        className=" border rounded-lg focus:outline-none focus:border-blue-500 flex-auto "
      />
      <button type="submit" className="py-2 px-4 m-1 bg-blue-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none focus:bg-blue-600">
       {
        Edits.id !== null ? "save ":" add"
       }
      </button>
    </form>
  </div>
  
  )
}

export default Todos
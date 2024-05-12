import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../Feature/todoSlice'


function Todos() {
    const [input, setinput] = useState('')
    const dispatch = useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        setinput('')
    }
  return (
    <div className="p-4">
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        placeholder="Write todo"
        value={input}
        onChange={(e) => setinput(e.target.value)}
        className="mr-2 py-2 px-4 border rounded-lg focus:outline-none focus:border-blue-500 flex-1"
      />
      <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Add
      </button>
    </form>
  </div>
  
  )
}

export default Todos
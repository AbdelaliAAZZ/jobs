import React, { useState } from 'react'

function Counter() {

const [counter ,setCounter] = useState(0);



  return (
    <div className='flex items-center justify-center'>
        <button className='text-3xl bg-blue-700 w-5 ' onClick={() => counter >= 0 ? setCounter(counter + 1) : setCounter(0)}>+</button>
        <h1 className='text-2xl ml-20 mr-20' >Count: {counter}</h1>
        <button className='text-3xl bg-blue-700 w-5 ' onClick={() => counter > 0 ? setCounter(counter - 1) : setCounter(0) }>-</button>


    </div>
  )
}

export default Counter
  
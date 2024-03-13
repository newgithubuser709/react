import React from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { decrement } from '../feature/showSlice';
 
function Component2() {

  const dispatch = useDispatch();
  const showData = useSelector((state) => state.show.value)

  return (
    <>
      <h1>component2 state : {showData}</h1> 
      <button onClick={()=> dispatch(decrement())}>decrement</button>
    </>
  )
}

export default Component2


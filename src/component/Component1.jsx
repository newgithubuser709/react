import React from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { increment } from '../feature/showSlice';

function Component1() {

  const dispatch = useDispatch();
  const showData = useSelector((state) => state.show.value);

  return (
    <div>
      <h1> component1 state : {showData}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
    </div>
  )

}

export default Component1

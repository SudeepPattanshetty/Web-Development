import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../features/CounterSlice';

const Counter = () => {

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value)

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(decrement())}>-</button><br /><br />
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter

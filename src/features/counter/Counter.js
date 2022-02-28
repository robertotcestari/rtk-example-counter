import { increment, decrement, incrementBy } from './counterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const [incrementValue, setIncrementValue] = useState(1);
  return (
    <div>
      <h2>Counter - Exemplo com Redux Toolkit</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementBy(incrementValue))}>
        Increment by {incrementValue}
      </button>
      <input
        type="text"
        name="increment-by"
        id="increment-by"
        value={incrementValue}
        onChange={(e) => setIncrementValue(Number(e.target.value))}
      />
    </div>
  );
}

export default Counter;

import React, { useState, useEffect, useRef } from 'react';
import { HookStatesContainer } from './style';

export const Counter_useState = ({initialCount = 27}) => {
  const [count, setCount] = useState(initialCount);

  /* only necessary for advanced buttons */
  const prevCount = usePrevious(count);

  return (
    <HookStatesContainer>
      <div>You clicked {count} times </div>
      <button onClick={() => setCount(count + 1)}> Click me </button>
      <button onClick={() => setCount(count + 1)}> Click me too </button>
      <button onClick={() => setCount(count - 3)}> Click me to reduce </button>
      <button onClick={() => setCount(count * 2)}> Click me because why not </button>
      <button onClick={() => setCount(0)}> Click me to zero </button>

     {/* advanced stuff, using useEffect and useRef */}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount)}> Click me to previous</button>
      <div> previous: {prevCount} </div>
    </HookStatesContainer>
  );

  function usePrevious(value) {
    //  The ref object is a generic container whose current property is mutable
    // and can hold any value, similar to an instance property on a class
    const ref = useRef();
    
    // Store current value in ref
    useEffect(() => // The function passed to useEffect will run after the render is committed to the screen
      { ref.current = value; },
      [ value ]
    ); // Only re-run if value changes
    
    // Return previous value (happens before update in useEffect above)
    return ref.current;
  }
}
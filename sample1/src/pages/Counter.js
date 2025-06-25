import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  const increase = () => {
    setNum(num + 1);
  };

  const decrease = () => {
    setNum(num - 1);
  };

  return (
    <>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>

      <p>{num}</p>
    </>
  );
};

export default Counter;

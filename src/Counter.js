import React from "react";

export const Counter = ({ name }) => {
  const [count, setCount] = React.useState(1);
  const addCount = React.useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      计时器组件
      <div>{name}</div>
      <div onClick={addCount}>{count}</div>
    </div>
  );
};

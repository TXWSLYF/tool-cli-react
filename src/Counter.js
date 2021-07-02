import React from "react";
import styles from "./counter.css";
console.log(styles)

export const Counter = ({ name }) => {
  const [count, setCount] = React.useState(1);
  const addCount = React.useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div className={styles.counter}>
      计时器组件
      <div>{name}</div>
      <div onClick={addCount}>{count}</div>
    </div>
  );
};

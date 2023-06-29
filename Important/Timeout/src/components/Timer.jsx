import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(20);

  useEffect(() => {
    const intervalID = setTimeout(() => {
      setCount((prevCount) => {
        if (prevCount <= 1) {
          clearTimeout(intervalID);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    const cleanUP = () => {
      clearTimeout(intervalID);
    };
    return cleanUP;
  }, []);

  return (
    <div>
      <h3>Count: {count}</h3>
    </div>
  );
}

export default Timer;

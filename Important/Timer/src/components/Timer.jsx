import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(20);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(intervalID);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    const cleanUP = () => {
      clearInterval(intervalID);
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

import { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const timerId = setInterval(() => {
      setCount((previousCount) => previousCount + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [isRunning]);

  const stopTimer = () => {
    setIsRunning(false);
  };

  return (
    <div className="timer">
      <h1>タイマー</h1>

      <div className="time-display">
        <p>経過時間</p>
        <span>{count}秒</span>
      </div>

      <button onClick={stopTimer} disabled={!isRunning}>
        {isRunning ? "ストップ" : "停止中"}
      </button>
    </div>
  );
};

export default Timer;

import { useState, useEffect } from "react";

function DigitalWatch() {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    // 1. componentDidMount
    console.log("Digital Watch Mounted");

    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime(new Date());
      }, 1000);
    }

    // 3. componentWillUnmount
    return () => {
      clearInterval(timer);
      console.log("Timer Cleaned Up");
    };
  }, [isRunning]);

  // 2. componentDidUpdate-like behavior
  useEffect(() => {
    console.log("Time Updated:", time.toLocaleTimeString());
  }, [time]);

  return (
    <div style={styles.container}>
      <h1>Digital Watch</h1>

      <div style={styles.clock}>
        {time.toLocaleTimeString()}
      </div>

      <p>{time.toLocaleDateString()}</p>

      <button
        style={styles.button}
        onClick={() => setIsRunning(!isRunning)}
      >
        {isRunning ? "Pause Watch" : "Start Watch"}
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    background: "#111827",
    color: "white",
    padding: "40px",
    borderRadius: "20px",
    maxWidth: "400px",
    margin: "50px auto",
    fontFamily: "Arial, sans-serif",
  },
  clock: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#22c55e",
    margin: "20px 0",
    fontVariantNumeric: "tabular-nums",
  },
  button: {
    padding: "12px 20px",
    background: "#22c55e",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default DigitalWatch;

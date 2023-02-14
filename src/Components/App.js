import { useState } from "react";
import "./App.css";
import load from "./spin.gif"

function App() {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState("");
  const [input, setInput] = useState("");
  const [timeInterval, setTimeInterval] = useState(null);
  const [loading, setLoading] = useState(false);

  function start() {
    const value = Math.floor(input);
    clearInterval(timeInterval);
    if (value <= 0 || isNaN(value)) {
      setMessage("Enter a valid value");      
      setCount(0);
      return;
    }
    timer(value);
    setInput("");
  }

  function timer(i) {
    setLoading(true);
    let time = i;
    const interval = setInterval(() => {
      setLoading(false);
      setCount(time);
      if (time == 0) {
        setMessage("Timeout");
        clearInterval(interval);
      }
      time -= 1;
    }, 1000);
    setTimeInterval(interval);
  }

  return (
    <div className="App">
      <div className="message">{message}</div>
      <input
        id="timeCount"
        placeholder="Enter timer value"
        onChange={(e) => {
          setMessage("");
          setInput(e.target.value);
        }}
        onKeyDown={(e) => (e.key === "Enter" ? start() : null)}
        value={input}
      />
      {loading ? <img src={load} width="150" alt="load"/> : <div id="current-time">{count}</div>}
    </div>
  );
}

export default App;

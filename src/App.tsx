import { useEffect, useState } from "react"
import "./App.css"
import CounterDisplay from "./components/CounterDisplay"
import CounterButtons from "./components/CounterButtons"

function App() {
  const [count, setCount] = useState<number>(() => {
    const saved = localStorage.getItem("count")
    return saved ? Number(saved) : 0
  })

  const [powerOn, setPowerOn] = useState<boolean>(() => {
    const saved = localStorage.getItem("power")
    return saved ? saved === "on" : true
  })

  useEffect(() => {
    localStorage.setItem("count", count.toString())
  }, [count])

  useEffect(() => {
    localStorage.setItem("power", powerOn ? "on" : "off")
  }, [powerOn])

  const increment = () => powerOn && setCount(c => c + 1)
  const decrement = () => powerOn && setCount(c => Math.max(0, c - 1))
  const reset = () => powerOn && setCount(0)

  return (
    <div className="counter-card">
    
      {/* Status LED */}
      <div className={`status-led ${powerOn ? "on" : "off"}`} />

      {/* Power Switch */}
      <div className="power-switch">
        <button
          className={`power-btn ${powerOn ? "on" : "off"}`}
          onClick={() => setPowerOn(p => !p)}
        >
          {powerOn ? "ON" : "OFF"}
        </button>
      </div>

      <h1>COUNTER MODULE</h1>

      <CounterDisplay count={count} powerOn={powerOn} />


      <CounterButtons
        onIncrement={increment}
        onDecrement={decrement}
        onReset={reset}
        disabled={!powerOn}
      />

      <div className="manafacturer_info">
      <div className="manufacturer">RAUF Okz</div>
<div className="model">VERSION 1.0</div>

      </div>
    </div>
  )
}

export default App

import { FaPlus, FaMinus, FaRedo } from "react-icons/fa"

type Props = {
  onIncrement: () => void
  onDecrement: () => void
  onReset: () => void
  disabled: boolean
}

function CounterButtons({
  onIncrement,
  onDecrement,
  onReset,
  disabled,
}: Props) {
  const playClickSound = () => {
    const audio = new Audio(
      "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQ="
    )
    audio.volume = 0.15
    audio.play().catch(() => {})
  }

  const wrap = (fn: () => void) => () => {
    if (!disabled) {
      playClickSound()
      fn()
    }
  }

  return (
    <div className="counter-buttons">
      <button className="btn-inc" disabled={disabled} onClick={wrap(onIncrement)}>
        <FaPlus />
      </button>

      <button className="btn-dec" disabled={disabled} onClick={wrap(onDecrement)}>
        <FaMinus />
      </button>

      <button className="btn-reset" disabled={disabled} onClick={wrap(onReset)}>
        <FaRedo />
      </button>
    </div>
  )
}

export default CounterButtons

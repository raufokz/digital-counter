import { useEffect, useRef } from "react"

type Props = {
  count: number
  powerOn: boolean
}

function CounterDisplay({ count, powerOn }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const prev = useRef(count)

  const display = count.toString().padStart(4, "0")

  useEffect(() => {
    if (ref.current && prev.current !== count) {
      ref.current.classList.add("changed")
      const t = setTimeout(() => ref.current?.classList.remove("changed"), 200)
      prev.current = count
      return () => clearTimeout(t)
    }
  }, [count])

  return (
    <div
      ref={ref}
      className={`counter-display ${powerOn ? "on" : "off"}`}
    >
      {display.split("").map((d, i) => (
        <span key={i} className="digit">{d}</span>
      ))}
    </div>
  )
}

export default CounterDisplay

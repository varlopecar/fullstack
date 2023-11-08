import { useStopwatch } from "../../contexts/StopwatchContextProvider"

const CounterDisplay = () => {
    const { minutes, seconds, milliseconds } = useStopwatch()
    console.log("CounterDisplay rendered")
    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
            <span>:</span>
            <span>{milliseconds}</span>
        </div>
    )
}

export default CounterDisplay
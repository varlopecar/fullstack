import useStopwatch from "../../hooks/useStopwatch"
import CounterButtons from "./CounterButtons"
import CounterDisplay from "./CounterDisplay"

const Counter = () => {
    const { seconds, minutes, miliseconds, start, stop, reset } = useStopwatch()

    return (
        <>
            <CounterDisplay seconds={seconds} minutes={minutes} miliseconds={miliseconds} />
            <CounterButtons start={start} stop={stop} reset={reset} />
        </>
    )
}

export default Counter

import CounterButtons from "./CounterButtons"
import CounterDisplay from "./CounterDisplay"
import { StopwatchProvider } from "../../hooks/useStopwatch"

const Counter = () => {
    return (
        <StopwatchProvider>
            <CounterDisplay />
            <CounterButtons />
        </StopwatchProvider>
    )
}

export default Counter

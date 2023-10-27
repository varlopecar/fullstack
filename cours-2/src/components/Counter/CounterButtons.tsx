import useStopwatch from "../../hooks/useStopwatch"

const CounterButtons = () => {
    const { start, stop, reset } = useStopwatch()
    
    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem" }}>
            <button onClick={start} className="btn btn-primary">
                Start
            </button>
            <button onClick={stop} className="btn btn-primary">
                Stop
            </button>
            <button onClick={reset} className="btn btn-primary">
                Reset
            </button>
        </div>
    )
}

export default CounterButtons
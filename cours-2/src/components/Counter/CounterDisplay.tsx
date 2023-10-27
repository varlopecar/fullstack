interface CounterDisplayProps {
    minutes: number
    seconds: number
    miliseconds: number
}

const CounterDisplay = ({ minutes, seconds, miliseconds }: CounterDisplayProps) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
            <span>:</span>
            <span>{miliseconds}</span>
        </div>
    )
}

export default CounterDisplay
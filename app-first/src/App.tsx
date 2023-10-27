import './App.css'
import useStopwatch from './hooks/useStopwatch'

function App() {
  const { seconds, minutes, miliseconds, start, stop, reset } = useStopwatch()

  return (
    <div className="card">
      <p>{minutes}:{seconds}:{miliseconds}</p>
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

export default App

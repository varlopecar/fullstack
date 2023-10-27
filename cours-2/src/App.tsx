import './App.css'
import Header from './components/Header';
import Counter from './components/Counter/Counter';

const App = () => {
  return (
    <>
      <Header title="Stopwatch" />

      <main>
        <Counter />
      </main>
    </>
  );
}

export default App

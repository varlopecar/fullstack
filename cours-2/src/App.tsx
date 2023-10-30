import './App.css'
import Header from './components/Header';
import Counter from './components/Counter/Counter';
import { useEffect, useState } from 'react';
import Profile from './components/Profile';
import { User } from './models/User';
import { useFetch } from 'usehooks-ts'
import { CounterProvider } from './components/Counter/CounterProvider';

const App = () => {
  const { data: user, error } = useFetch<User>('https://jsonplaceholder.typicode.com/users/1')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if (user) {
      setIsLoading(false)
    }
  }, [user])

  return (
    <>
      <Header title="Cours React" />

      <main>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {user && <Profile user={user} />}
        <Counter />
      </main>
    </>
  );
}

export default App

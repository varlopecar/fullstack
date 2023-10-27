import './App.css'
import Header from './components/Header';
import Counter from './components/Counter/Counter';
import { getProfile } from './services/Profile';
import { useCallback, useEffect, useState } from 'react';
import { useContext } from 'react';
import Profile from './components/Profile';
import { User } from './models/User';
import { useFetch } from 'usehooks-ts'
import { CounterProvider } from './components/Counter/CounterProvider';

const App = () => {
  // const [user, setUser] = useState<User | null>(null)
  // const [isLoading, setIsLoading] = useState<boolean>(false)
  const { data: user, error } = useFetch<User>('https://jsonplaceholder.typicode.com/users/1')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  

  // const fetchProfile = useCallback(async () => {
  //   setIsLoading(true)
  //   getProfile(1).then(profile => {
  //     setUser(profile)
  //     setIsLoading(false)
  //   })
  // }, [])

  useEffect(() => {
    if (user) {
      setIsLoading(false)
    }
  }, [user])

  // useEffect(() => {
  //   fetchProfile()
  // }, [fetchProfile])

  return (
    <>
      <Header title="Cours React" />

      <main>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {user && <Profile user={user} />}
        <CounterProvider>
          <Counter />
        </CounterProvider>
      </main>
    </>
  );
}

export default App

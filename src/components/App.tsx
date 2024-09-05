import AppRouter from './AppRouter';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.scroll({top: 0, left: 0, behavior: 'auto'});
  }, [pathname, hash])

  return (
    <>
      <AppRouter />
    </>
  )
}

export default App

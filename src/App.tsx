import React, { Suspense, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import DefaultHeader from './container/DefaultHeader';
import Loading from './components/Loading';

function App() {
  const [page, setPage] = useState(1)


  const onScrollPage = (e: any) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget

    if (scrollHeight - scrollTop <= clientHeight) {
      setPage(page + 1)
      setTimeout(() => {
        setPage(page + 1)  
      }, 1000);
    }
  }

  return (
    <div onScroll={onScrollPage} style={{ height: '100vh', overflowY: 'auto' }} className="App">
      <DefaultHeader />
      <Suspense fallback={<Loading/>}>
        <Home page={page} />
      </Suspense>
    </div>
  );
}

export default App;

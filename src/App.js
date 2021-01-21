import React, { useState } from "react";
import Navbar from './components/Navbar';
import Peoples from './components/Peoples';
import Planets from './components/Planets';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

const queryClient = new QueryClient()


function App() {
  const [page, setPage] = useState('planets');

  return (
    <>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <h1>Star Wars Info</h1>
          <Navbar setPage={setPage} />
          <div className="content"> 
            { page === 'planets' ? <Planets /> : <Peoples /> }
          </div>
        </QueryClientProvider>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;

import React, { useState } from "react";
import Navbar from './components/Navbar';
import Peoples from './components/Peoples';
import Planets from './components/Planets';
import { ReactQueryDevtools } from 'react-query-devtools';


function App() {
  const [page, setPage] = useState('planets');

  return (
    <>
      <div className="App">
          <h1>Star Wars Info</h1>
          <Navbar setPage={setPage} />
          <div className="content"> 
            { page === 'planets' ? <Planets /> : <Peoples /> }
          </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;

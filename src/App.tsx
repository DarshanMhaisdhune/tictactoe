import React from 'react';
import Board from './Components/Board';


function App() {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-custom-blue' >
       <p className='text-7xl font-serif text-green-950 font-extrabold mb-10'>Tic Tac Toe</p>
       <Board/>
    </div>
  );
}

export default App;

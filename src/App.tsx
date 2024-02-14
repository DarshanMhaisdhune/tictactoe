import React from 'react';
import Board from './Components/Board';


function App() {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-custom-blue p-10' >
       <p className='text-5xl mb-24  md:text-7xl xl:text-8xl xl:mt-20 xl:-mb-5  font-serif text-green-950 font-extrabold'>Tic Tac Toe</p>
       <Board/>
    </div>
  );
}

export default App;

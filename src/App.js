import { useState } from 'react';
import './App.css';

function App() {
  const [counter, updateCounter] = useState(0);
  const [bgcol, updateCol] = useState('bg-slate-100');
  function decrementHandler(){
    updateCounter(counter - 1);
    updateCol('bg-red-500');
  }
  function incrementHandler(){
    updateCounter(counter + 1);
    updateCol('bg-green-500');
  }
  function resetHandler(){
    updateCounter(0);
    updateCol('bg-slate-100')
  }
  return (
    <div className='w-[100vw] h-[100vh] bg-slate-500 flex flex-col gap-2 items-center justify-around'>
      <h1 className='text-[3rem] font-semibold'>The Counter App</h1>
      <div className='flex items-center justify-center bg-slate-100 text-[3rem] gap-5 p-1'>
        <button onClick={decrementHandler} className='px-6 font-semibold active:scale-95 border-r-2 border-slate-500'>-</button>
        <div className={bgcol}>
          {counter}
        </div>
        <button onClick={incrementHandler} className='px-6 font-semibold active:scale-95 border-l-2 border-slate-500'>+</button>
      </div>
    <button onClick={resetHandler} className='bg-red-500 text-[2rem] px-3 py-1 rounded-lg text-white '>Reset</button>

    </div>
  );
}

export default App;

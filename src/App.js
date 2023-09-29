import './App.css';
import React,{useState} from 'react';
function App() {
  const [count,setCount]=useState(0);

  function increaseHandler()
  {
    setCount(count+1);
  }
  function decreaseHandler()
  {
    
      setCount(count-1);
    
  }

  function resetHandler()
  {
    setCount(0);
  }

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10'>
    <div className='text-[#0398d4] font-medium text-2xl'>Increment AND Decrement</div>
    <div className='flex bg-[#fff] gap-12 py-3 rounded-sm justify-center items-center'>
    <button className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl opacity-80" onClick={decreaseHandler}>
        -
      </button>
      
      <div className='font-bold gap-12 text-5xl opacity-80'>
        {count}
      </div>
      <button className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl opacity-80' onClick={increaseHandler}>
        +
      </button>
    </div>
    <div>
      <button className='bg-[#0398d4] text-[#fff] font-medium text-xl p-2' onClick={resetHandler}>Reset</button>
    </div>
    </div>
  );
}

export default App;

'use client';

import { useState } from 'react';

export const CounterPage = () => {
  const [count, setCount] = useState(1);

  const handleCounter = (value: number) => {
    setCount(count + value);
  };

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Counter Page</span>
      <span className='text-9xl'>{count}</span>
      <div className='flex'>
        <button
          className='flex items-center justify-center p-1 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-3 text-4xl'
          onClick={() => handleCounter(-1)}
        >
          -1
        </button>
        <button
          className='flex items-center justify-center p-1 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] text-4xl'
          onClick={() => handleCounter(1)}
        >
          +1
        </button>
      </div>
    </div>
  );
};

export default CounterPage;

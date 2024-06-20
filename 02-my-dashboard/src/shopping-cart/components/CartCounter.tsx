'use client';

import { useState } from 'react';

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [count, setCount] = useState(value);

  const handleCounter = (value: number) => {
    setCount(count + value);
  };

  return (
    <>
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
    </>
  );
};

import { useEffect, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(prevCount => prevCount + 1);
  };
  return (
    <div className='flex flex-col items-center mt-10 space-y-5'>
      <h1 className='text-lg font-medium'>Button has been clicked: {count} times</h1>
      <button onClick={handleCount} className='bg-green-500 py-2 px-7 rounded-sm w-max text-white'>
        Click Me
      </button>
    </div>
  );
};

export default App;

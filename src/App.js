import { useEffect, useState } from 'react';
import Card from './components/Card';
const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://random-data-api.com/api/users/random_user?size=10');
      const data = await res.json();
      setData(data);
    };
    getData();
  }, []);

  console.log(data);
  return (
    <h1 className='bg-gray-100 min-h-screen flex flex-col items-center py-10'>
      <button className='bg-green-500 text-white w-max mx-auto py-3 px-10 text-lg font-medium rounded-md hover:bg-green-600 duration-300'>
        Fetch Random
      </button>

      <main className='flex flex-wrap justify-center w-10/12 gap-5 mt-10'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </h1>
  );
};

export default App;

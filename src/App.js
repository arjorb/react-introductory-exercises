import { click } from '@testing-library/user-event/dist/click';
import { useEffect, useState } from 'react';
import Card from './components/Card';
const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const res = await fetch('https://random-data-api.com/api/users/random_user?size=10');
    const data = await res.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleFetch = () => {
    getData();
  };
  const CardElement = data.map(data => <Card key={data.id} {...data} />);
  return (
    <h1 className='bg-gray-100 min-h-screen flex flex-col items-center py-10'>
      <button
        onClick={handleFetch}
        className='bg-green-500 text-white w-max mx-auto py-3 px-10 text-lg font-medium rounded-md hover:bg-green-600 duration-300'
      >
        Fetch Random
      </button>

      {loading ? (
        <img src='./loader.svg' alt='loader' />
      ) : (
        <main className='flex flex-wrap justify-center w-10/12 gap-5 mt-10'>{CardElement}</main>
      )}
    </h1>
  );
};

export default App;

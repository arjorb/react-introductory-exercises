import { useEffect } from 'react';
const App = () => {
  const [animals, setAnimals] = useEffect(['🐶 dog', '🐈 cat', '🐣 chicken', '🐄 cow', '🐑 sheep', '🐴 horse']);

  return <h1 className='text-3xl text-[#017880] font-bold flex justify-center'>React Intoductory Exercise!</h1>;
};

export default App;

import { useState } from 'react';
import Animal from './components/Animal';
const App = () => {
  const [animals, setAnimals] = useState(['🐶 dog', '🐈 cat', '🐣 chicken', '🐄 cow', '🐑 sheep', '🐴 horse']);

  const animalsElement = animals.map((animal, index) => <Animal key={index} animal={animal} />);
  return <h1 className='flex flex-col mt-10 ml-10'>{animalsElement}</h1>;
};

export default App;

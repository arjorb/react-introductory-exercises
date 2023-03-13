const App = () => {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  const animalList = animals.map((animal, index) => <li key={index}>{animal}</li>);
  return <ul className='marker:text-green-500 list-outside list-disc ml-10 mt-10'>{animalList}</ul>;
};

export default App;

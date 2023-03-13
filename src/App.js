import Animal from './components/Animal';

const App = () => {
  const animals = ['🐶 dog', '🐈 cat', '🐣 chicken', '🐄 cow', '🐑 sheep', '🐴 horse'];
  return <Animal animals={animals} />;
};

export default App;

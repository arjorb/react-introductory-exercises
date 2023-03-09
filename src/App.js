import Button from './components/Button';

const App = () => {
  return (
    <div className='flex gap-5 mt-10 justify-center'>
      <Button value={1} />
      <Button value={2} />
      <Button value={3} />
    </div>
  );
};

export default App;

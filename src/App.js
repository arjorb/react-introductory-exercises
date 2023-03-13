import FactCard from './components/FactCard';
import { DATA } from './data';
const App = () => {
  const factElement = DATA.map(item => <FactCard key={item.id} {...item} />);
  return <div className='bg-green-100 min-h-screen flex justify-center items-center gap-5'>{factElement}</div>;
};

export default App;

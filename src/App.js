const App = () => {
  return (
    <div className='flex justify-center mt-10'>
      <div className='w-80 space-y-3'>
        <input type='text' className='w-full border border-slate-200 py-1 rounded-sm outline-none pl-1' />
        <input type='text' className='w-full border border-slate-200 py-1 rounded-sm outline-none pl-1' />
        <button className='bg-green-500 w-full py-3 rounded-sm text-xl font-semibold text-white'>Greet Me</button>
      </div>
    </div>
  );
};

export default App;

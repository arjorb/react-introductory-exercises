const FactCard = ({ setup, punchline }) => {
  console.log(setup);
  return (
    <div className='bg-white py-14 px-5 shadow-lg rounded-md w-90 text-center'>
      <h1 className='text-xl font-bold pb-4'>{setup}</h1>
      <p>{punchline}</p>
    </div>
  );
};

export default FactCard;

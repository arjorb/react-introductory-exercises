const Animal = ({ animals }) => {
  const animalsElement = animals.map((animal, index) => <li key={index}>{animal}</li>);
  return (
    <div>
      <ul className='flex flex-col mt-10 ml-10 space-y-3'>{animalsElement}</ul>
    </div>
  );
};

export default Animal;

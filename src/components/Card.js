const Card = ({ first_name, last_name, avatar, employment }) => {
  return (
    <div className='w-96 h-96 bg-white rounded-md'>
      <img src={avatar} alt='avatar' />
      <div className='pl-6 pt-3 space-y-2'>
        <h1 className='font-bold'>
          {first_name} {last_name}
        </h1>
        <p className='text-sm'>{employment.title}</p>
      </div>
    </div>
  );
};

export default Card;

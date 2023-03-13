const Card = ({ first_name: firstName, last_name: lastName, avatar, employment }) => {
  return (
    <div class='card w-96 h-96 bg-white rounded-md relative cursor-pointer'>
      <div class='front absolute inset-0 bg-white'>
        <img src={avatar} alt='avatar' />
        <div className='pl-6 pt-3 space-y-2'>
          <h1 className='font-bold'>
            {firstName} {lastName}
          </h1>
          <p className='text-sm'>{employment.title}</p>
        </div>
      </div>
      <div class='back absolute inset-0 bg-white flex items-center justify-center rotate-y-180'>
        <h2 class='text-2xl font-bold'>{employment.key_skill}</h2>
      </div>
    </div>
  );
};

export default Card;

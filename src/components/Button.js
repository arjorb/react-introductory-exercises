const Button = ({ value }) => {
  return (
    <div
      className='bg-green-500 py-2 px-7 text-white rounded-sm cursor-pointer'
      onClick={() => alert(`You clicked on Button ${value}`)}
    >
      Button {value}
    </div>
  );
};

export default Button;

import { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormDate => ({ ...prevFormDate, [name]: value }));
  };

  const handleSubmit = () => {
    alert(`Hello, ${formData.firstname} ${formData.lastname} !`);
    setFormData({ firstname: '', lastname: '' });
  };
  return (
    <div className='flex justify-center mt-10'>
      <div className='w-80 space-y-3'>
        <input
          type='text'
          name='firstname'
          value={formData.firstname}
          onChange={handleChange}
          placeholder='First name'
          className='w-full border border-slate-200 py-1 rounded-sm outline-none pl-1'
        />
        <input
          type='text'
          name='lastname'
          value={formData.lastname}
          onChange={handleChange}
          placeholder='Second name'
          className='w-full border border-slate-200 py-1 rounded-sm outline-none pl-1'
        />
        <button onClick={handleSubmit} className='bg-green-500 w-full py-3 rounded-sm text-xl font-medium text-white'>
          Greet Me
        </button>
      </div>
    </div>
  );
};

export default App;

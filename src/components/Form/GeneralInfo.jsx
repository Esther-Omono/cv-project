import { useState } from 'react';

export default function GeneralInfo({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstname: '',
    lastName: '',
    email: '',
    phonenumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>General Information</legend>

        <div className='form-group'>
          <label htmlFor='firstname'>First Name</label>
          <input
            type='text'
            id='firstname'
            name='firstname'
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='lastname'>Last Name</label>
          <input
            type='text'
            id='lastname'
            name='lastname'
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='phonenumber'>Phone Number</label>
          <input
            type='tel'
            id='phonenumber'
            name='phonenumber'
            value={formData.phonenumber}
            onChange={handleChange}
          />
        </div>

        <div className='button-group'>
          <button type='button'>Edit</button>
          <button type='submit'>Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

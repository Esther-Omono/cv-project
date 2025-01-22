import { useState } from 'react';
import PropTypes from 'prop-types';

export default function GeneralInfo({ onSubmit }) {
  const [generalData, setGeneralData] = useState({
    firstname: '',
    lastName: '',
    email: '',
    phonenumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(generalData);
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
            value={generalData.firstname || ''}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='lastname'>Last Name</label>
          <input
            type='text'
            id='lastname'
            name='lastname'
            value={generalData.lastname || ''}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={generalData.email || ''}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='phonenumber'>Phone Number</label>
          <input
            type='tel'
            id='phonenumber'
            name='phonenumber'
            value={generalData.phonenumber || ''}
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

GeneralInfo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

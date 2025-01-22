import { useState } from 'react';
import PropTypes from 'prop-types';

export default function GeneralInfo({ initialData, onSubmit }) {
  const [isEditing, setIsEditing] = useState(true);
  const [generalData, setGeneralData] = useState(initialData);

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
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <div className='display-section'>
        <fieldset>
          <legend>General Information</legend>
          <p>
            <b>Name:</b> {generalData.firstname} {generalData.lastName}
          </p>
          <p>
            <b>Email:</b> {generalData.email}
          </p>
          <p>
            <b>Phone:</b> {generalData.phonenumber}
          </p>
          <button type='button' onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </fieldset>
      </div>
    );
  }

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
          <button type='submit'>Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

GeneralInfo.propTypes = {
  initialData: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

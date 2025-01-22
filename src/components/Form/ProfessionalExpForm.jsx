import { useState } from 'react';
import PropTypes from 'prop-types';

export default function ProfessionalExpForm({ onSubmit }) {
  const [workData, setWorkData] = useState({
    companyname: '',
    jobtitle: '',
    startdate: '',
    enddate: '',
    responsibilities: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(workData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Professional Experience</legend>

        <div className='form-group'>
          <label htmlFor='companyname'>Company Name</label>
          <input
            type='text'
            id='companyname'
            name='companyname'
            value={workData.companyname || ''}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='jobtitle'>Job Title</label>
          <input
            type='text'
            id='jobtitle'
            name='jobtitle'
            value={workData.jobtitle || ''}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='startdate'>Start Date</label>
          <input
            type='date'
            id='startdate'
            name='startdate'
            value={workData.startdate || ''}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='enddate'>End Date</label>
          <input
            type='date'
            id='enddate'
            name='enddate'
            value={workData.enddate || ''}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='responsibilities'>Responsibilities</label>
          <input
            type='text'
            id='responsibilities'
            name='responsibilities'
            value={workData.responsibilities || ''}
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

ProfessionalExpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

import { useState } from 'react';
import PropTypes from 'prop-types';

export default function ProfessionalExpForm({ initialData, onSubmit }) {
  const [isEditing, setIsEditing] = useState(true);
  const [workData, setWorkData] = useState(initialData);
  const [currentResponsibility, setCurrentResponsibility] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddResponsibility = () => {
    if (currentResponsibility.trim()) {
      setWorkData((prevData) => ({
        ...prevData,
        responsibilities: [...prevData.responsibilities, currentResponsibility],
      }));
      setCurrentResponsibility('');
    }
  };

  const handleRemoveResponsibility = (index) => {
    setWorkData((prevData) => ({
      ...prevData,
      responsibilities: prevData.responsibilities.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(workData);
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <div className='display-section'>
        <fieldset>
          <legend>Professional Experience</legend>
          <p>
            <b>Company Name:</b> {workData.companyname}
          </p>
          <p>
            <b>Job Title:</b> {workData.jobtitle}
          </p>
          <p>
            <b>Start Date:</b> {workData.startdate}
          </p>
          <p>
            <b>End Date:</b> {workData.enddate}
          </p>
          <p>
            <b>Responsibilities:</b>
          </p>
          <ul>
            {workData.responsibilities.map((duty, index) => (
              <li key={index}>{duty}</li>
            ))}
          </ul>
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
            value={currentResponsibility}
            onChange={(e) => setCurrentResponsibility(e.target.value)}
          />
          <button
            className='resp-btn'
            type='button'
            onClick={handleAddResponsibility}
          >
            Add Responsibility
          </button>
          <ul className='resp-list'>
            {workData.responsibilities.map((duty, index) => (
              <li key={index}>
                {duty}{' '}
                <button
                  type='button'
                  onClick={() => handleRemoveResponsibility(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className='button-group'>
          <button type='submit'>Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

ProfessionalExpForm.propTypes = {
  initialData: PropTypes.shape({
    companyname: PropTypes.string,
    jobtitle: PropTypes.string,
    startdate: PropTypes.string,
    enddate: PropTypes.string,
    responsibilities: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

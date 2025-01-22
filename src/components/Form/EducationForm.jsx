import { useState } from "react";
import PropTypes from 'prop-types';

export default function EducationForm({ onSubmit }) {
  const [educationData, setEducationData] = useState({
    schoolname: '',
    degree: '',
    course: '',
    grade: '',
    startdate: '',
    enddate: '',
  })

    const handleChange = (e) => {
      const { name, value } = e.target;
      setEducationData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(educationData);
    };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Education</legend>

        <div className='form-group'>
          <label htmlFor='schoolname'>Name of School</label>
          <input
            type='text'
            id='schoolname'
            name='schoolname'
            value={educationData.schoolname}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='degree'>Degree</label>
          <input
            type='text'
            id='degree'
            name='degree'
            value={educationData.degree}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='course'>Course of Study</label>
          <input
            type='text'
            id='course'
            name='course'
            value={educationData.course}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='grade'>Grade</label>
          <input
            type='text'
            id='grade'
            name='grade'
            value={educationData.grade}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='startdate'>Start Date</label>
          <input
            type='date'
            id='startdate'
            name='startdate'
            value={educationData.startdate}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='enddate'>End Date</label>
          <input
            type='date'
            id='enddate'
            name='enddate'
            value={educationData.enddate}
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

EducationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

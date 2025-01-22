import PropTypes from 'prop-types';

export default function Education({ educationData }) {
  return (
    <div className='education'>
      <h2>Education</h2>

      <hr />

      <h3>{educationData.schoolname}</h3>

      <div className='school-details'>
        <h4>{educationData.degree}</h4>
        <h4>{educationData.course}</h4>
        <h4>{educationData.grade}</h4>
      </div>

      <div className='school-date'>
        <p>
          {educationData.startdate} - {educationData.enddate}
        </p>
      </div>
    </div>
  );
}

Education.propTypes = {
  educationData: PropTypes.object.isRequired,
};

import PropTypes from 'prop-types';

export default function ProfessionalExp({ workData }) {
  return (
    <div className='profession'>
      <h2>Professional Experience</h2>

      <hr />

      <h3>{workData.companyname}</h3>
      <h4>{workData.jobtitle}</h4>

      <div className='work-date'>
        <p>
          {workData.startdate} - {workData.enddate}
        </p>
      </div>

      <ul className='duties'>
        {workData.responsibilities.map((duty, index) => (
          <li key={index}>{duty}</li>
        ))}
      </ul>
    </div>
  );
}

ProfessionalExp.propTypes = {
  workData: PropTypes.shape({
    companyname: PropTypes.string.isRequired,
    jobtitle: PropTypes.string.isRequired,
    startdate: PropTypes.string.isRequired,
    enddate: PropTypes.string.isRequired,
    responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

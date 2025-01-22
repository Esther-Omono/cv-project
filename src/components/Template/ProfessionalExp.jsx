import PropTypes from 'prop-types';

export default function ProfessionalExp({ workData }) {
  return (
    <div className='profession'>
      <h2>Professional Experience</h2>

      <hr />

      <h3>{workData.companyname}</h3>
      <h4>{workData.jobtitle}</h4>

      <div className='work-date'>
        <p>{workData.startdate}</p>
        <p>{workData.enddate}</p>
      </div>

      <p className='duties'>{workData.responsibilities}</p>
    </div>
  );
}

ProfessionalExp.propTypes = {
  workData: PropTypes.object.isRequired,
};

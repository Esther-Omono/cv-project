import PropTypes from 'prop-types';
import Header from './Header';
import Education from './Education';
import ProfessionalExp from './ProfessionalExp';
import '../../styles/template.css';

export default function Template({ generalData, educationData }) {
  return (
    <div className='template-container'>
      <Header generalData={generalData} />
      <Education educationData={educationData} />
      <ProfessionalExp />
    </div>
  );
}

Template.propTypes = {
  generalData: PropTypes.object.isRequired,
  educationData: PropTypes.object.isRequired,
};

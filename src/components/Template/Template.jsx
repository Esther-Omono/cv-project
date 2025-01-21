import PropTypes from 'prop-types';
import Header from './Header';
import Education from './Education';
import ProfessionalExp from './ProfessionalExp';
import '../../styles/template.css';

export default function Template({ formData }) {
  return (
    <div className='template-container'>
      <Header formData={formData} />
      <Education />
      <ProfessionalExp />
    </div>
  );
}

Template.propTypes = {
  formData: PropTypes.func.isRequired,
};

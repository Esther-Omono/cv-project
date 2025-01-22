import PropTypes from 'prop-types';
import GeneralInfo from './GeneralInfo';
import EducationForm from './EducationForm';
import ProfessionalExpForm from './ProfessionalExpForm';
import '../../styles/forms.css';

export default function Form({
  onGeneralSubmit,
  onEducationSubmit,
  onWorkSubmit,
}) {
  return (
    <div className='form-container'>
      <GeneralInfo onSubmit={onGeneralSubmit} />
      <EducationForm onSubmit={onEducationSubmit} />
      <ProfessionalExpForm onSubmit={onWorkSubmit} />
    </div>
  );
}

Form.propTypes = {
  onGeneralSubmit: PropTypes.func.isRequired,
  onEducationSubmit: PropTypes.func.isRequired,
  onWorkSubmit: PropTypes.func.isRequired,
};

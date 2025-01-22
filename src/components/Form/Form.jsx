import PropTypes from 'prop-types';
import GeneralInfo from './GeneralInfo';
import EducationForm from './EducationForm';
import ProfessionalExpForm from './ProfessionalExpForm';
import '../../styles/forms.css';

export default function Form({ onGeneralSubmit, onEducationSubmit }) {
  return (
    <div className='form-container'>
      <GeneralInfo onSubmit={onGeneralSubmit} />
      <EducationForm onSubmit={onEducationSubmit}/>
      <ProfessionalExpForm />
    </div>
  );
}

Form.propTypes = {
  onGeneralSubmit: PropTypes.func.isRequired,
  onEducationSubmit: PropTypes.func.isRequired,
};

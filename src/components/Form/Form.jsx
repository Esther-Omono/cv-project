import PropTypes from 'prop-types';
import GeneralInfo from './GeneralInfo';
import EducationForm from './EducationForm';
import ProfessionalExpForm from './ProfessionalExpForm';
import '../../styles/forms.css';

export default function Form({
  initialGeneralData,
  initialEducationData,
  initialWorkData,
  onGeneralSubmit,
  onEducationSubmit,
  onWorkSubmit,
}) {
  return (
    <div className='form-container'>
      <GeneralInfo
        initialData={initialGeneralData}
        onSubmit={onGeneralSubmit}
      />
      <EducationForm
        initialData={initialEducationData}
        onSubmit={onEducationSubmit}
      />
      <ProfessionalExpForm
        initialData={initialWorkData}
        onSubmit={onWorkSubmit}
      />
    </div>
  );
}

Form.propTypes = {
  initialGeneralData: PropTypes.object.isRequired,
  initialEducationData: PropTypes.object.isRequired,
  initialWorkData: PropTypes.object.isRequired,
  onGeneralSubmit: PropTypes.func.isRequired,
  onEducationSubmit: PropTypes.func.isRequired,
  onWorkSubmit: PropTypes.func.isRequired,
};

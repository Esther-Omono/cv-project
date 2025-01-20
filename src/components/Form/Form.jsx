import GeneralInfo from './GeneralInfo';
import EducationForm from './EducationForm';
import ProfessionalExpForm from './ProfessionalExpForm';
import '../../styles/forms.css';

export default function Form({ onSubmit }) {
  return (
    <div className='form-container'>
      <GeneralInfo onSubmit={onSubmit} />
      <EducationForm />
      <ProfessionalExpForm />
    </div>
  );
}

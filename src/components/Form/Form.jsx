import GeneralInfo from './GeneralInfo';
import EducationForm from './EducationForm';
import ProfessionalExpForm from './ProfessionalExpForm';
import '../../styles/forms.css';

export default function Form() {
  return (
    <div className='form-container'>
      <GeneralInfo />
      <EducationForm />
      <ProfessionalExpForm />
    </div>
  );
}

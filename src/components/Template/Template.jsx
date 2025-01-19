import Header from './Header';
import Education from './Education';
import ProfessionalExp from './ProfessionalExp';
import '../../styles/template.css';

export default function Template() {
  return (
    <div className='template-container'>
      <Header />
      <Education />
      <ProfessionalExp />
    </div>
  );
}

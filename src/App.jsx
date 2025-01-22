import { useState } from 'react';
import Form from './components/Form/Form';
import Template from './components/Template/Template';
import './styles/App.css';

function App() {
  const [generalData, setGeneralData] = useState({
    firstname: '',
    lastName: '',
    email: '',
    phonenumber: '',
  });

  const [educationData, setEducationData] = useState({
    schoolname: '',
    degree: '',
    course: '',
    grade: '',
    startdate: '',
    enddate: '',
  })

  const handleGeneralSubmit = (data) => {
    setGeneralData(data);
  };

  const handleEducationSubmit = (data) => {
    setEducationData(data);
  };

  return (
    <div className='wrapper'>
      <Form
        onGeneralSubmit={handleGeneralSubmit}
        onEducationSubmit={handleEducationSubmit}
      />
      <Template
       generalData={generalData}
       educationData={educationData}
      />
    </div>
  );
}

export default App;

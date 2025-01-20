import { useState } from 'react';
import Form from './components/Form/Form';
import Template from './components/Template/Template';
import './styles/App.css';

function App() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastName: '',
    email: '',
    phonenumber: '',
  });

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className='wrapper'>
      <Form onSubmit={handleFormSubmit} />
      <Template formData={formData} />
    </div>
  );
}

export default App;

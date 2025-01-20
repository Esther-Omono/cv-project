export default function Header({ formData }) {
  return (
    <div className='header'>
      <h1>
        {formData.firstname} {formData.lastname}
      </h1>
      <div>
        <h4>{formData.email}</h4>
        <h4>{formData.phonenumber}</h4>
      </div>
    </div>
  );
}

export default function GeneralInfo() {
  return (
    <form>
      <fieldset>
        <legend>General Information</legend>

        <div className='form-group'>
          <label htmlFor='firstname'>First Name</label>
          <input type='text' id='firstname' name='firstname' />
        </div>

        <div className='form-group'>
          <label htmlFor='lastname'>Last Name</label>
          <input type='text' id='lastname' name='lastname' />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' />
        </div>

        <div className='form-group'>
          <label htmlFor='phonenumber'>Phone Number</label>
          <input type='tel' id='phonenumber' name='phonenumber' />
        </div>

        <div className='button-group'>
          <button type='button'>Edit</button>
          <button type='submit'>Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

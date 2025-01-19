export default function EducationForm() {
  return (
    <form>
      <fieldset>
        <legend>Education</legend>

        <div className='form-group'>
          <label htmlFor='schoolname'>Name of School</label>
          <input type='text' id='schoolname' name='schoolname' />
        </div>

        <div className='form-group'>
          <label htmlFor='degree'>Degree</label>
          <input type='text' id='degree' name='degree' />
        </div>

        <div className='form-group'>
          <label htmlFor='course'>Course of Study</label>
          <input type='text' id='course' name='course' />
        </div>

        <div className='form-group'>
          <label htmlFor='grade'>Grade</label>
          <input type='text' id='grade' name='grade' />
        </div>

        <div className='form-group'>
          <label htmlFor='startdate'>Start Date</label>
          <input type='date' id='startdate' name='startdate' />
        </div>

        <div className='form-group'>
          <label htmlFor='enddate'>End Date</label>
          <input type='date' id='enddate' name='enddate' />
        </div>

        <div className='button-group'>
          <button type='button'>Edit</button>
          <button type='submit'>Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

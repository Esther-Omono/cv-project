export default function ProfessionalExpForm() {
  return (
    <form>
      <fieldset>
        <legend>Professional Experience</legend>

        <div className='form-group'>
          <label htmlFor='companyname'>Company Name</label>
          <input type='text' id='companyname' name='companyname' />
        </div>

        <div className='form-group'>
          <label htmlFor='jobtitle'>Job Title</label>
          <input type='text' id='jobtitle' name='jobtitle' />
        </div>

        <div className='form-group'>
          <label htmlFor='startdate'>Start Date</label>
          <input type='date' id='startdate' name='startdate' />
        </div>

        <div className='form-group'>
          <label htmlFor='enddate'>End Date</label>
          <input type='date' id='enddate' name='enddate' />
        </div>

        <div className='form-group'>
          <label htmlFor='responsibilities'>Responsibilities</label>
          <input type='text' id='responsibilities' name='responsibilities' />
        </div>

        <div className='button-group'>
          <button type='button'>Edit</button>
          <button type='submit'>Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

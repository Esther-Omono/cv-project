export default function ProfessionalExpForm() {
  return (
    <form>
      <fieldset>
        <legend>Professional Experience</legend>

        <label htmlFor='companyname'>Company Name</label>
        <input type='text' id='companyname' name='companyname' />

        <label htmlFor='jobtitle'>Job Title</label>
        <input type='text' id='jobtitle' name='jobtitle' />

        <label htmlFor='startdate'>Start Date</label>
        <input type='date' id='startdate' name='startdate' />

        <label htmlFor='enddate'>End Date</label>
        <input type='date' id='enddate' name='enddate' />

        <label htmlFor='responsibilities'>Responsibilities</label>
        <input type='text' id='responsibilities' name='responsibilities' />

        <button type='button'>Edit</button>
        <button type='submit'>Submit</button>
      </fieldset>
    </form>
  );
}

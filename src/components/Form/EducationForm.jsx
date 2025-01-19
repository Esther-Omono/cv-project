export default function EducationForm() {
  return (
    <form>
      <fieldset>
        <legend>Education</legend>

        <label htmlFor='schoolname'>Name of School</label>
        <input type='text' id='schoolname' name='schoolname' />

        <label htmlFor='degree'>Degree</label>
        <input type='text' id='degree' name='degree' />

        <label htmlFor='course'>Course of Study</label>
        <input type='text' id='course' name='course' />

        <label htmlFor='grade'>Grade</label>
        <input type='text' id='grade' name='grade' />

        <label htmlFor='startdate'>Start Date</label>
        <input type='date' id='startdate' name='startdate' />

        <label htmlFor='enddate'>End Date</label>
        <input type='date' id='enddate' name='enddate' />

        <button type='button'>Edit</button>
        <button type='submit'>Submit</button>
      </fieldset>
    </form>
  );
}

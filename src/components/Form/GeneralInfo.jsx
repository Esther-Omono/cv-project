export default function GeneralInfo() {
  return (
    <form>
      <fieldset>
        <legend>General Information</legend>

        <label htmlFor='firstname'>First Name</label>
        <input type='text' id='firstname' name='firstname' />

        <label htmlFor='lastname'>Last Name</label>
        <input type='text' id='lastname' name='lastname' />

        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' />

        <label htmlFor='phonenumber'>Phone Number</label>
        <input type='tel' id='phonenumber' name='phonenumber' />

        <button type='button'>Edit</button>
        <button type='submit'>Submit</button>
      </fieldset>
    </form>
  );
}

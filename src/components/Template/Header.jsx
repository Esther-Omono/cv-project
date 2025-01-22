import PropTypes from "prop-types";

export default function Header({ generalData }) {
  

  return (
    <div className='header'>
      <h1>
        {generalData.firstname} {generalData.lastname}
      </h1>
      <div>
        <h4>{generalData.email}</h4>
        <h4>{generalData.phonenumber}</h4>
      </div>
    </div>
  );
}

Header.propTypes = {
  generalData: PropTypes.object.isRequired,
};


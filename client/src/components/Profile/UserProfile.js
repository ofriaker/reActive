import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <header className='border-bottom'>
      <h1>My account</h1>
      <h2>Welcome Amit</h2>
      <div class="d-flex flex-row-reverse" >
          <button type="button" class="btn btn-outline-info p-2 " data-mdb-ripple-color="dark" style={{borderColor:'#008190', color:'333333'}}>Logout</button>
      </div>
     
      
      {/* <ProfileForm /> */}
      </header>
    </section>
  );
};

export default UserProfile;

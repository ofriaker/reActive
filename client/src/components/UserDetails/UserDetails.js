import { useEffect, useState, useRef } from 'react';
import buys from '../../store/reducers/buys';
import classes from './UserDetails.module.css';
import { fetchUser, updateUser } from '../../store/middlewares/users';
import { useDispatch, useSelector } from 'react-redux';

const UserDetails = ({ user, buys }) => {

  const [max, setMax] = useState(0);
  const [name, setName] = useState([]);
  const [address, setAddress] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const nameInputRef = useRef();
  const addressInputRef = useRef(); 
  const dispatch = useDispatch();
  
  const handleEditClick = () => {
    setIsEditing(true);
  }
  
  const handleSaveClick = (event) => {
    event.preventDefault();
   
    const userDetails = {
      email: user[0].email,
      userName :name,
      address: address,
    
    };

    dispatch(updateUser(userDetails));
    setIsEditing(false);
  }
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission
  };


  const maxTotalPrice = () => {
    const m = 0;
    for(var b of buys) {
      if(b.totalPrice > m) {
        m = b.totalPrice;
      }
    }
    setMax(m);

  }
    return (
        <section className="w-100">
          {(user.length!=0) && 
  <div className="py-5 w-100">
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-md-12 col-lg-6">

        <div className="card w-100" style={{borderRadius: 15}}>
            <div className="d-flex justify-content-end ">
              { isEditing ? 
              (<button type="button" href="#" onClick={handleSaveClick}>
                <i className='fa-solid fa-circle-check h4 m-2 p-2' style={{color:'green'}}></i>
                </button>) :
                (<button type="button" href="#" onClick={handleEditClick}>
                  <i className='fas fa-edit h5 m-2 p-2' style={{color:'black'}}></i>
                </button>)}
            </div>
          <div className="card-body text-center">
            <span>Personal Details</span>
            <div className="mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                className="rounded-circle img-fluid " style={{width: '180px'}}/>
            </div>
            <p className="text-muted mb-2">Email <span className="mx-2">|</span> <a
                href="#!"></a>{user[0].email}</p>

                <div className={classes.formRow}>
                <p className="mb-2 ">Name <span className="mx-2">|</span> <a
                href="#!"></a></p>
                  { isEditing ? (<input type="text" id='name' className={classes.inputBox} 
                  value={user[0].userName} ref = {nameInputRef} onChange={handleNameChange} />)
                  : (<div> {user[0].userName}</div>) }
                </div>
            
            <div className={classes.formRow}>
            <p className="mb-2 ">Address <span className="mx-2">|</span></p>
                  { isEditing ? (<input type="text" id='address' className={classes.inputBox} 
                  value={user[0].address} ref={addressInputRef} onChange={handleAddressChange}/>)
                  : (<div> {user[0].address}</div>) }
                </div>

            <button type="button" className="btn btn-primary btn-rounded btn-lg p-2" href="#">
              My Orders
            </button>
            <div className="d-flex justify-content-between text-center mt-4 mb-2">
              <div>
                <p className="mb-2 h5">8471</p>
                <p className="text-muted mb-0">Wallets Balance</p>
              </div>
              <div className="px-3">
                <p className="mb-2 h5">{max}</p>
                <p className="text-muted mb-0">Max order's price</p>
              </div>
              <div>
                <p className="mb-2 h5">{buys.length}</p>
                <p className="text-muted mb-0">Total Orders</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
}
</section>

     
    );
};

  export default UserDetails;
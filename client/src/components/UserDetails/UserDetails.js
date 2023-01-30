import React from 'react';
import buys from '../../store/reducers/buys';




const UserDetails = ({buys, user}) => {
    return (
        <section className="w-100">
  <div classNameName="py-5 w-100">
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-md-12 col-lg-6">

        <div className="card w-100" style={{borderRadius: 15}}>
            <div className="d-flex justify-content-end ">
                <i className='fas fa-edit h5 m-2 p-2' style={{color:'black'}}></i>
            </div>
          <div className="card-body text-center">
            <div className="mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                className="rounded-circle img-fluid " style={{width: '180px'}}/>
            </div>
            <h4 className="mb-2 text-center">{user.length}</h4>
            <p className="text-muted mb-2">Email <span className="mx-2">|</span> <a
                href="#!">mdbootstrap.com</a></p>
            <p className="text-muted">Address <span className="mx-2">|</span>mdbootstrap.com</p>

            <button type="button" className="btn btn-primary btn-rounded btn-lg" href="#">
              My Orders
            </button>
            <div className="d-flex justify-content-between text-center mt-4 mb-2">
              <div>
                <p className="mb-2 h5">8471</p>
                <p className="text-muted mb-0">Wallets Balance</p>
              </div>
              <div className="px-3">
                <p className="mb-2 h5">8512</p>
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
</section>

     
    );
};

 
  
  export default UserDetails;
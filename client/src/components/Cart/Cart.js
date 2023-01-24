import './Cart.css';
import { useState } from 'react';

const Cart = () => {
    let [totalPrice, setTotalPrice] = useState(0);

    return (
        <div className="container">
            <div className='row mt-2'>
                <h2>Your Shopping Cart </h2>
            </div>
            <div className="row mt-2">
                <h4 className="col-md-8">Items</h4>
                <h4 className="col-md-2">Quantity</h4>
                <h4 className="col-md-2">Price</h4>
                <hr></hr>
            </div>
            <div>
                {/* items itmes */}
            </div>
            <div className="row">
                <div className="col-md-8"></div>

                <div className="col-md-3 total">
                    <div className='row mt-2'>
                        <h4 className='col-md-8'>Cart Total:</h4>
                        <h4 className='col-md-4'>{totalPrice}$</h4>
                    </div>
                    <div className='row mt-2'>
                        <i className='col-md-6'></i>
                        <button className='col-md-5 button'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
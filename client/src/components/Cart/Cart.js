import './Cart.css';
import { useEffect, useState } from 'react';
import React, { useContext } from 'react';
import { useDispatch, useSelector } from "react-redux";
import AuthContext from '../../store/auth-context';
import CartItem from './CartItem';
import { selectCart} from '../../store/selectors/cart';
import { setCart } from '../../store/reducers/cart';
import { selectUser } from '../../store/selectors/users';

const calculateTotalPrice = (Items) => {
    let prices = Items.map(item => item.price * item.quantity);
    let sum = prices.reduce((a, b) => a + b, 0);
    return sum;
}

const Cart = () => {
    const dispatch = useDispatch();
    let [totalPrice, setTotalPrice] = useState(0);
    const cart = useSelector(selectCart);
    // const user = useSelector(selectUser);
    const authCtx = useContext(AuthContext);
    let isCartEmpty = (cart.length == 0);
    let cartItemsComponents = [];
    const mongoUrl = 'http://localhost:4000/api/buys';


    useEffect(() => {
        setTotalPrice(calculateTotalPrice(cart));
    });

    if (cart) {
        cart.forEach((item, index) => {
            cartItemsComponents.push(<CartItem 
                item={item} index={index}></CartItem>);
        });
    }

    const onCheckout = () => {   
        if (!isCartEmpty) {
            if (authCtx.isLoggedin) {
                const buy = {};
                buy.userId = authCtx.email;
                buy.products = [];
                cart.forEach((item) => {
                    buy.products.push({
                        productId: item._id,
                        quantity: item.quantity
                    })
                });
                buy.totalPrice = totalPrice;
               // console.log(JSON.stringify(buy));

                fetch(mongoUrl, {
                    method: 'POST',
                    body: JSON.stringify({
                        buy: buy,
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                    if (res.ok) {
                       // console.log(res);
                        dispatch(setCart([]));
                        alert("Thanks for shopping at reActive!")
                        return res.json();
                    } else {
                        return res.json().then((data) => {
                          //  console.log(data);
                            alert("Sorry, something went wrong :(")
                            let errorMessage = 'Buy failed'
                            throw new Error(errorMessage);
                        });
                    }
                });
            } else {
                alert("You must login first");
            }   
        } else {
            alert("Your cart is empty");
        }
    }

    return (
        <div className="container">
            <div className='row mt-2'>
                <h2>Your Shopping Cart </h2>
            </div>
            <div className="row mt-2">
                <h4 className="col-md-8 text">Items</h4>
                <h4 className="col-md-2 text">Quantity</h4>
                <h4 className="col-md-2 text">Price</h4>
                <hr></hr>
            </div>
            {isCartEmpty ? 
                <h1>Your cart is empty :(</h1> :
                <div >{cartItemsComponents}</div>
            }
            

            <div className="row">
                <div className="col-md-8"></div>

                <div className="col-md-3 total">
                    <div className='row mt-2'>
                        <h4 className='col-md-8'>Cart Total:</h4>
                        <h4 className='col-md-4'>{totalPrice}₪</h4>
                    </div>
                    <div className='row mt-2'>
                        <i className='col-md-6'></i>
                        <button className='col-md-5 button' onClick={onCheckout}>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
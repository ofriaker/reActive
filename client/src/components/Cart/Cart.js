import './Cart.css';
import { useEffect, useState } from 'react';
import CartItem from './CartItem';

const calculateTotalPrice = (Items) => {
    let prices = Items.map(item => item.price);
    let sum = prices.reduce((a, b) => a + b, 0);
    return sum;
}

const Cart = () => {
    let [totalPrice, setTotalPrice] = useState(0);
    const [cartItems, setCartItems] = useState(new Array);

    useEffect(() => {
        setCartItems([
            {
                name: "Clear Whey Isolate",
                imgUrl: "https://static.thcdn.com/productimg/1600/1600/12081396-1994792209042321.jpg",
                quantity: 1,
                price: 5,
                flavour: "Peach Tea"
            },
            {
                name: "Sparkling Energy Drink",
                imgUrl: "https://static.thcdn.com/productimg/1600/1600/12770761-5274858302518136.jpg",
                quantity: 2,
                price: 16,
                flavour: "Mixed Berry"
            },
        ]);
    }, []);

    useEffect(() => {
        setTotalPrice(calculateTotalPrice(cartItems))
    }); 

    let cartItemsComponents=[];

    cartItems.forEach((item) => {
        cartItemsComponents.push(<CartItem {...item}></CartItem>);
    });
    
    return (
        <div className="container">
            <div className='row mt-2'>
                <h2>Your Shopping Cart </h2>
            </div>
            <div className="row mt-2">
                <h4 className="col-md-8">Items</h4>
                <h4 className="col-md-2 text">Quantity</h4>
                <h4 className="col-md-2 text">Price</h4>
                <hr></hr>
            </div>
            <div>
                {cartItemsComponents}
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
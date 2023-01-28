import './Cart.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CartItem from './CartItem';
import { isLoading, selectCart } from '../../store/selectors/cart';
import { setCart } from '../../store/reducers/cart';


const calculateTotalPrice = (Items) => {
    let prices = Items.map(item => item.price * item.quantity);
    let sum = prices.reduce((a, b) => a + b, 0);
    return sum;
}

const Cart = () => {
    const dispatch = useDispatch();
    let [totalPrice, setTotalPrice] = useState(0);
    const loading = useSelector(isLoading);
    const cart = useSelector(selectCart);
    let cartItemsComponents = [];


    useEffect(() => {
        setTotalPrice(calculateTotalPrice(cart));
    });

    if (cart) {
        cart.forEach((item, index) => {
            cartItemsComponents.push(<CartItem 
                item={item} index={index}></CartItem>);
        });
    }

    // let cart = [];

    // let cartItems = [
    //     {
    //         name: "Clear Whey Isolate",
    //         imgUrl: "https://static.thcdn.com/productimg/1600/1600/12081396-1994792209042321.jpg",
    //         quantity: 1,
    //         price: 5,
    //         flavour: "Peach Tea"
    //     },
    //     {
    //         name: "Sparkling Energy Drink",
    //         imgUrl: "https://static.thcdn.com/productimg/1600/1600/12770761-5274858302518136.jpg",
    //         quantity: 2,
    //         price: 8,
    //         flavour: "Mixed Berry"
    //     },
    // ];

    // useEffect(() => {
    //     dispatch(setCart(cartItems));
    // }, []);

    // const [cartItems, setCartItems] = useState(new Array);

    // useEffect(() => {
    //     setCartItems([
    //         {
    //             name: "Clear Whey Isolate",
    //             imgUrl: "https://static.thcdn.com/productimg/1600/1600/12081396-1994792209042321.jpg",
    //             quantity: 1,
    //             price: 5,
    //             flavour: "Peach Tea"
    //         },
    //         {
    //             name: "Sparkling Energy Drink",
    //             imgUrl: "https://static.thcdn.com/productimg/1600/1600/12770761-5274858302518136.jpg",
    //             quantity: 2,
    //             price: 8,
    //             flavour: "Mixed Berry"
    //         },
    //     ]);
    // }, []);



    // cartItems.forEach((item) => {
    //     cartItemsComponents.push(<CartItem {...item}></CartItem>);
    // });



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
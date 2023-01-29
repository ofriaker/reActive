import './CartItem.css';
import QuantityButton from '../Quantity/QuantityButton';


const CartItem = ({item, index}) => {
    return (
        <div className="">
            <div className="row mt-2">
                <div className='col-md-2'>
                    <img className="smallImg" src={item.imgUrl} alt=""></img>
                </div>
                <div className='col-md-6'>
                    <div className='row mt-1'>
                        <h3 >{item.name}</h3>
                        <h5>flavour: {item.flavour}</h5>
                    </div>
                </div>
                <div className='col-md-2 text'>
                    <QuantityButton
                        cartItem={item}
                        index ={index}/>
                </div>
                <div className='col-md-2'>
                    <div className='row'>
                        <h4 className=" col-md-6 text">{item.price * item.quantity}₪</h4>
                        <button className="cancelBTn col-md-6">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}

export default CartItem;
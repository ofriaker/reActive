import './CartItem.css';

const CartItem = (props) => {
    console.log(props);
    return (
        <div className="">
            <div className="row mt-2">
                <div className='col-md-2'>
                    <img className="smallImg" src={props.imgUrl} alt=""></img>
                </div>
                <div className='col-md-6'>
                    <div className='row mt-1'>
                        <h3 >{props.name}</h3>
                        <h5>flavour: {props.flavour}</h5>
                    </div>
                </div>
                {/* <h3 className="col-md-6">{props.name}</h3> */}
                <h4 className="col-md-2 text">{props.quantity}</h4>
                <h4 className="col-md-2 text">{props.price}$</h4>
            </div>
            <hr></hr>
        </div>
    );
}

export default CartItem;
import './Product.css';
import Select from 'react-select';
import QuantityButton from '../Quantity/QuantityButton';

const Product = () => {
    const imgSrc = "images/product.jpg";
    const productName = "Layered Protein Bar";
    const price = 7;
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];
    

    return (
        <div className="container">
            <div className='row mt-2'>
                <div className="col-md-5">
                    <img src={imgSrc} alt="product" height="400" />
                </div>

                <div className="col-md-6">
                    <h1>{productName}</h1>
                    <hr></hr>
                    <h2>{price} $</h2>
                    <hr></hr>
                    <h4>Flavours:</h4>
                    <Select options={options}></Select>
                    <div className="row mt-1">
                        <h2 className='col-md-2 text'>Quantity:</h2>
                        <div className="row mt-1 quantiti_line"></div>
                        <QuantityButton/>
                    </div>
                    <div className='row'>
                        <i className='col-md-4'></i>
                        <button className='col-md-4 to_cart'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
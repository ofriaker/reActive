import classes from './Product.css';
import Select from 'react-select'


const Product = () => { 
    const imgSrc = "images/product.jpg";
    const productName = "Layered Protein Bar";
    const price = 7;
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <div className="container">
            <div className='row mt-2'>
                <div className="col-md-5">
                    <img src={imgSrc} alt="product" height="400"/>
                </div>
                <div className="col-md-1">

                </div>
                <div className="col-md-6">
                    <h1>{productName}</h1>
                    <hr></hr>
                    <h2>{price} $</h2>
                    <hr></hr>
                    <label>Flavours:</label>
                    <select options={options}></select>
                </div>
            </div>
        </div>
    );
};

export default Product;
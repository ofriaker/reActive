import ItemsGallry from '../ItemsGallery/ItemsGallery';
import classes from './StartingPageContent.module.css';

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <div className='bg-image shadow-1-strong'>
      <img src='/images/homePhoto.jpg' className='w-100'/>
      <div className='mask text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
      <div className="container d-flex align-items-center justify-content-center text-center h-100">
        <div className="text-white">
          <h1 className="mb-3" style={{color:'white'}}>Reactive sale</h1>
          <h4 className="mb-4" style={{color:'white', textAlign:'center'}}>Promotions up to 70%!</h4>
          <a className="btn btn-outline-light btn-lg mb-3" href="#gallery" role="button">See the promotional offer
            <i className="fas fa-tag ms-1 p-1"></i>
          </a>
        </div>
      </div>
      </div>
    </div>
    <div className='p-5 text-center bg-light' id="gallery">
        <h1 className='mb-3'>Our best sellers</h1>
    </div>
    <ItemsGallry></ItemsGallry>
    </section>
  );
};

export default StartingPageContent;

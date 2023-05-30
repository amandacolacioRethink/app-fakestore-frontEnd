import './BestSelling.css'
import { BsArrowRight } from "react-icons/bs";
import Card from '../Card/Card';
import { useState, useEffect } from "react";
import { get3Products } from "../../services/home";
import { Link } from 'react-router-dom';

const BestSelling = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    get3Products().then((resp) => {
      setProducts(resp);
    }).catch((error) => {
      alert(error);
    })
  }, []);

    return (
    <div className='containerBestSelling'>
        <div className="intro">
          <h1>Best Selling Products</h1>
          <h2>Easiest way to shop the internet by buying your favorite products </h2>
          <Link to="/products" onClick={() => window.scrollTo(0, 0)}>
            <button>
              See more <BsArrowRight />
            </button>
          </Link>
      </div> 
      <div className="cardBestSelling">
        {products?.map((product) => {
              return(
                <Link key={product.id} to={`/Products/${product.id}`}>
                  <Card
                    key={product.id}
                    imageURL={product.image}
                    imageAlt={product.title}
                    title={product.title}
                    price={product.price}
                  />
                </Link>
              )
            }
          )}
      </div>
    </div>
  )
}

export default BestSelling
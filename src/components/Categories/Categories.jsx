import './categories.css'
import { BsArrowRight } from "react-icons/bs";
import Card from '../Card/Card';
import { useState, useEffect } from "react";
import { get3Categories } from "../../services/home";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategory] = useState();
  const images = ["https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg","https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg","https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"]

  useEffect(() => {
    get3Categories().then((resp) => {
      setCategory(resp);
    }).catch((error) => {
      alert(error);
    })
  }, []);
  return (
    <div className="containerCategories">
      <div className="introCategories">
        <h1>Categories</h1>
        <h2>Find what you are looking for</h2>
      </div>
      <div className="cardCategories">
        {categories?.map((category, index) => {
            return(
              <Card
              key={category.id}
              imageURL={images[index]}
              imageAlt={category.name}
              title={category.name}
            />
            )
          }
        )}
      </div>
      <div className='Explore'>
      <Link to="/products" onClick={() => window.scrollTo(0, 0)}>
        <button>
          Explore <BsArrowRight />
        </button>
      </Link>
      </div>
    
    </div>
  )
}

export default Categories
import './categories.css'
import { BsArrowRight } from "react-icons/bs";
import Card from '../Card/Card';

const Categories = () => {
  return (
    <div className="containerCategories">
      <div className="introCategories">
        <h1>Categories</h1>
        <h2>Find what you are looking for</h2>
      </div>
      <div className="cardCategories">
        <Card
         img={"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"} 
         title={"Natural Plants"} 
        />
         <Card
         img={"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"} 
         title={"Natural Plants"} 
        />
         <Card
         img={"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"} 
         title={"Natural Plants"} 
        />
      </div>
      <div className='Explore'>
        <button>
            Explore <BsArrowRight />
        </button>
      </div>
    
    </div>
  )
}

export default Categories
import './BestSelling.css'
import { BsArrowRight } from "react-icons/bs";
import Card from '../Card/Card';

const BestSelling = () => {
  return (
    <div className='containerBestSelling'>
        <div className="intro">
          <h1>Best Selling Products</h1>
          <h2>Easiest way to shop the internet by buying your favorite products </h2>
          <button>
            See more <BsArrowRight />
          </button>
      </div> 
      <div className="cardBestSelling">
        <Card
        img={"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"}
        title={"Natural Plants"}
        price={"R$ 49,90"}
        />
         <Card
        img={"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"}
        title={"Natural Plants"}
        price={"R$ 49,90"}
        />
         <Card
        img={"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"}
        title={"Natural Plants"}
        price={"R$ 49,90"}
        />
      </div>
    </div>
  )
}

export default BestSelling
import { AiOutlineSearch } from 'react-icons/ai';
import { TiArrowSortedDown } from 'react-icons/ti';
import Card from '../../components/Card/Card'

import './Products.css'

const Products = () => {
  return (
    <div className='containerProducts'>
        <div className="search">
            <div className="searchProducts">
                <input type="text" placeholder='Procurando por algum produto?'/>
                <button>
                <i><AiOutlineSearch/></i>
                </button>
            </div>
            <div className="categorySearch">
                <select name="Categories" id="">
                    <option value="">Selecione a categoria</option>
                </select>
                <button className="select-icon">
                    <TiArrowSortedDown />
                </button>
            </div>
        </div>
        <h1>Products</h1>
        <div className="cardProducts">

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

export default Products
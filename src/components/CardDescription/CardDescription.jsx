import './CardDescription.css'
import stars from '../../assets/stars.svg'
import Line from '../Line/Line'
import { getProductById } from '../../services/products';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDescription = (props) => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    getProductById(id)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);


  const calculateStars = (response) => {
    const width = 100 - response.rating.rate * 20;
    return width;
  };

  return (
    <div className="containerProduct">
      {product ? (
        <div className="productView">
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title}/>
        </div>
      ) : (
        <h1>Produto não encontrado</h1>
      )}

      {product && (
        <div className="containerProductDescription">
          <Line />
          <div className="productInfo">
            <h4> Categoria: {product.category}</h4>
           <div className="avaliacao">
              <img src={stars} alt="Estrelinhas" />
              <h4>{product.rating.count} avalições de clientes</h4>
           </div>
           
          </div>
          <Line />
          <div className="moreInfoProduct">
            <span id='cifrao'>R$</span>
            <span id='value'>399</span>
            <div className="descriptionProduct">
              <h3>Descrição do produto:</h3>
              <h4>{product.description}</h4>
            </div>

          </div>
          <Line />
          <div className="lastInfo">
              <div className="infosTitle">
                <h4>Produto:</h4>
                <h4>Categoria:</h4>
              </div>
              <div className="infosValue">
                <h4>{product.title}</h4>
                <h4>{product.category}</h4>
              </div>
            </div>
            <Line/>
        </div>
      )}
    </div>
  );
};
export default CardDescription
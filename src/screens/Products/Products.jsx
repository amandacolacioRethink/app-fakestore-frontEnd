import { AiOutlineSearch } from 'react-icons/ai';
import { TiArrowSortedDown } from 'react-icons/ti';
import Card from '../../components/Card/Card'
import { useState, useEffect } from 'react';
import { getProducts,getCategories,getCategoryByCategory } from '../../services/products';
import { Link } from 'react-router-dom';

import './Products.css'

const Products = () => {
  const [categories, setCategory] = useState();
  const [products, setProducts] = useState();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getProducts().then((resp) => {
      setProducts(resp);
    }).catch((error) => {
      alert(error);
    })
  }, []);

  useEffect(()=>{
    getCategories().then((resp) => {
      setCategory(resp);
    }).catch((error) =>{
      alert(error);
    })
  },[]);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    if (category) {
      getCategoryByCategory(category)
        .then((resp) => {
          setFilteredProducts(resp);
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      setFilteredProducts([]);
    }
  };

  const handleSearchInputChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    
    let filtered;
    
    if(selectedCategory){
      filtered = products.filter((product) =>
      product.title.toLowerCase().includes(text.toLowerCase()) &&
      product.category === selectedCategory
    );
    }else{
      filtered = products.filter((product) =>
        product.title.toLowerCase().includes(text.toLowerCase())
      );
    }
    setFilteredProducts(filtered);
  };

  return (
    <div className='containerProducts'>
        <div className="search">
            <div className="searchProducts">
                <input type="text" placeholder='Procurando por algum produto?' value={searchText} onChange={handleSearchInputChange}/>
                <button>
                <i><AiOutlineSearch/></i>
                </button>
            </div>
            <div className="categorySearch">
                <select name="Categories" id="categorySelect" onChange={handleCategoryChange}>
                    <option value="">Selecione a categoria</option>
                    {categories?.map((category) => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                </select>
                <button className="select-icon">
                    <TiArrowSortedDown />
                </button>
            </div>
        </div>
        <h1>Products</h1>
        <div className="cardProducts"> 
          {selectedCategory || filteredProducts.length > 0 ? (
            filteredProducts?.map((product) => (
              <Link key={product.id} to={`/Products/${product.id}`}>
                  <Card
                    key={product.id}
                    imageURL={product.image}
                    imageAlt={product.title}
                    title={product.title}
                    price={product.price}
                  />
              </Link>              
            ))
            
          ) : (
            products?.map((product) => (
              <Link key={product.id} to={`/Products/${product.id}`}>
                 <Card
                    key={product.id}
                    imageURL={product.image}
                    imageAlt={product.title}
                    title={product.title}
                    price={product.price}
                  />
              </Link>
            ))
          )}
      </div>

    </div>
  )
}

export default Products
import { createNewProduct, getCategories } from "../../services/products";
import { useState, useEffect } from 'react';


const ProductRegister = () => {
    const [categories, setCategory] = useState();
    const [selectedCategory, setSelectedCategory] = useState('');
    const [formData, setFormData] = useState();    

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
}

const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormData({
        title: event.target.elements.title.value,
        description: event.target.elements.description.value,
        category: selectedCategory,
        price: event.target.elements.price.value,
        image: event.target.elements.image.value,
        rating: {
          rate: 0,
          rating: 0
        }
      });
      
    console.log('o form data',formData)
};

const handleInputChange = (event) => {
   
};
  return (
    <div className="registerContainer">
        <h1>Cadastro de novo produto</h1>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="title">Título:</label>
            <input
            type="text"
            id="title"
            name="title"
            onChange={handleInputChange}
            required
            /><br /><br />

            <label htmlFor="description">Descrição:</label><br />
            <textarea
            id="description"
            name="description"
            onChange={handleInputChange}
            required
            ></textarea><br /><br />

            <label htmlFor="category">Categoria:</label>
            <select
            id="category"
            name="category"
            onChange={handleCategoryChange}
            required
            >
           <option value="category">Selecione a categoria</option>
            {categories?.map((category) => (
               <option key={category.id} value={category.name}>
                {category.name}
                </option>
            ))}
            </select><br /><br />

            <label htmlFor="price">Preço:</label>
            <input
            type="number"
            id="price"
            name="price"
            step="0.01"
            onChange={handleInputChange}
            required
            /><br /><br />

            <label htmlFor="image">URL da Imagem:</label>
            <input
            type="url"
            id="image"
            name="image"
            onChange={handleInputChange}
            required
            /><br /><br />

            <input type="submit" value="Cadastrar" />
        </form>
    </div>
  )
}

export default ProductRegister
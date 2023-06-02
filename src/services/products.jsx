import api from './api';

export async function getProducts() {
  const response = await api.get('products');
  return response.data
}

export async function getCategories() {
  const response = await api.get('products/categories');
  return response.data
}

export async function getCategoryByCategory(category) {
    const response = await api.get('products/category/'+category);
    return response.data
}

export async function getProductById(id){
  const response = await api.get('products/'+id);
  return response.data;
}

export async function createNewProduct(product){
  const response = await api.post('/products/' + product)
  return response.data;
}
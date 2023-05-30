import api from './api';

export async function get3Products() {
  const response = await api.get('products');
  const products = response.data.slice(0, 3);
  return products;
}

export async function get3Categories() {
  const response = await api.get('products/categories');
  const categories = response.data.slice(0, 3); 
  return categories;
}
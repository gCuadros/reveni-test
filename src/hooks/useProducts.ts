import { getProducts } from '../services/getProducts';
import { useQuery } from 'react-query';

export const useProducts = () => useQuery('products', getProducts);

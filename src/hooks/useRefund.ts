import { getReturnOrder } from '../services/getReturnOrder';
import { useQuery } from 'react-query';

export const useRefund = () => useQuery('refund', getReturnOrder);

const urlDataProducts: string = '../../public/data/orderCheck.json';

export const getProducts = async () => {
  return fetch(urlDataProducts, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
};

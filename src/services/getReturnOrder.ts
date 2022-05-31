const urlDataProducts: string = '../../public/data/returnSubmission.json';

export const getReturnOrder = async () => {
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

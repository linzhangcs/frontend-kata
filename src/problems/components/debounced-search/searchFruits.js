import {fruits} from './data.js'

export const searchFruits = (searchTerm) => {
  const delay = 500;

  return new Promise(resolve => {
    setTimeout(() => {
      const normalizedSearchTerm = searchTerm.toLowerCase().trim();

      if(normalizedSearchTerm.length === 0) {
        resolve([]);
        return;
      }
      const result = fruits.filter(fruit => fruit.toLowerCase().includes(normalizedSearchTerm));
      resolve(result);

    }, delay)
  })

}
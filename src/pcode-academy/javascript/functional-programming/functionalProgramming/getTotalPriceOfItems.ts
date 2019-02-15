import { Item } from '../model/Item.model';

export const getTotalPriceOfItemsImperative = (items: Item[]): number => {
  let sum = 0;

  items.forEach(item => {
    sum += item.price;
  });

  return sum;
};

export const getTotalPriceOfItemsDeclarative = (items: Item[]): number => {
  return 0;
};

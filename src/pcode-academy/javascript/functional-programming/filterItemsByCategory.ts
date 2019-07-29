import { Item } from './model/Item.model';

import { Category } from './types/Category.enum';

export const filterItemsByCategoryImperative = (category: Category) => (
  items: Item[],
): Item[] => {
  const filteredItems: Item[] = [];
  items.forEach(item => {
    if (item.category === category) {
      filteredItems.push(item);
    }
  });
  return filteredItems;
};

export const filterItemsByCategoryDeclarative = (category: Category) => (
  items: Item[],
): Item[] => {

  return items.filter(item => item.category === category);
};

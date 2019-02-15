import { Order } from '../model/Order.model';

import { Item } from '../model/Item.model';

export const getItemsOfOrdersImperative = (orders: Order[]): Item[] => {
  let items: Item[] = [];

  orders.forEach(order => {
    items = [...items, ...order.items];
  });

  return items;
};

export const getItemsOfOrdersDeclarative = (orders: Order[]): Item[] => {
  return [];
};

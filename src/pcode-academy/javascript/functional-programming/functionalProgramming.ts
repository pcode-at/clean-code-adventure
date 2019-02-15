import { Order } from './model/Order.model';
import { Category } from './types/Category.enum';
import { Item } from './model/Item.model';

export const filterOrdersByCustomerNameImperative = (
  orders: Order[],
  customerName: string,
): Order[] => {
  const filteredOrders: Order[] = [];
  orders.forEach(order => {
    if (order.customer.name === customerName) {
      filteredOrders.push(order);
    }
  });
  return filteredOrders;
};

export const filterOrdersByCustomerNameDeclarative = (
  orders: Order[],
  customerName: string,
): Order[] => {
  return [];
};

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

export const filterItemsByCategoryImperative = (
  items: Item[],
  category: Category,
): Item[] => {
  const filteredItems: Item[] = [];
  items.forEach(item => {
    if (item.category === category) {
      filteredItems.push(item);
    }
  });
  return filteredItems;
};

export const filterItemsByCategoryDeclarative = (
  items: Item[],
  category: Category,
): Item[] => {
  return [];
};

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

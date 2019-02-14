import { Order } from './model/Order.model';
import { Category } from './enum/Category.enum';
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

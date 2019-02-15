import { Order } from '../model/Order.model';

export const filterOrdersByCustomerNameImperative = (customerName: string) => (
  orders: Order[],
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

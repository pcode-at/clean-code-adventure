import { pipe } from 'ramda';

import { Order } from '../model/Order.model';
import { Category } from '../types/Category.enum';
import { filterOrdersByCustomerNameImperative } from './filterOrdersByCustomerName';
import { getItemsOfOrdersImperative } from './getItemsOfOrders';
import { filterItemsByCategoryImperative } from './filterItemsByCategory';
import { getTotalPriceOfItemsImperative } from './getTotalPriceOfItems';

export const getTotalPriceByCustomerNameAndCategory = (
  orders: Order[],
  customerName: string,
  category: Category,
): number => {
  const ordersFilterdByCustomerName = filterOrdersByCustomerNameImperative(
    customerName,
  )(orders);
  const items = getItemsOfOrdersImperative(ordersFilterdByCustomerName);
  const itemsWithCategoryKids = filterItemsByCategoryImperative(category)(
    items,
  );
  const totalPrice = getTotalPriceOfItemsImperative(itemsWithCategoryKids);

  return totalPrice;
};

// Here you should all the functions together you created so far.
// In addition to that we want that you use the pipe function from ramda imported above
export const getTotalPriceByCustomerNameAndCategoryPipe = (
  orders: Order[],
  customerName: string,
  category: Category,
): number => {
  return 0;
};

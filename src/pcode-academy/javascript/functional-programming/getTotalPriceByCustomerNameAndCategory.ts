import { pipe } from 'ramda';

import { Order } from './model/Order.model';
import { Category } from './types/Category.enum';
import { filterOrdersByCustomerNameImperative, filterOrdersByCustomerNameDeclarative } from './filterOrdersByCustomerName';
import { getItemsOfOrdersImperative, getItemsOfOrdersDeclarative } from './getItemsOfOrders';
import { filterItemsByCategoryImperative, filterItemsByCategoryDeclarative } from './filterItemsByCategory';
import { getTotalPriceOfItemsImperative, getTotalPriceOfItemsDeclarative } from './getTotalPriceOfItems';

export const getTotalPriceByCustomerNameAndCategory = (
  orders: Order[],
  customerName: string,
  category: Category,
): number => {
  const ordersFilterdByCustomerName = filterOrdersByCustomerNameImperative(customerName,)(orders);
  const items = getItemsOfOrdersImperative(ordersFilterdByCustomerName);
  const itemsWithCategoryKids = filterItemsByCategoryImperative(category)(
    items,
  );
  const totalPrice = getTotalPriceOfItemsImperative(itemsWithCategoryKids);

  return totalPrice;
};

// Here you should use all the functions together you created so far.
// In addition to that we want that you use the pipe function from ramda imported above
export const getTotalPriceByCustomerNameAndCategoryPipe = (
  orders: Order[],
  customerName: string,
  category: Category,
): number => {
  const filter = filterOrdersByCustomerNameDeclarative(customerName)(orders);
  return pipe(
    filterOrdersByCustomerNameDeclarative(customerName),
    getItemsOfOrdersDeclarative,
    filterItemsByCategoryDeclarative(category),
    getTotalPriceOfItemsDeclarative
  )(orders);
};

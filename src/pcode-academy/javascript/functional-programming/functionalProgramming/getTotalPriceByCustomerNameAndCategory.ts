import { Item } from '../model/Item.model';
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
    orders,
    customerName,
  );
  const items = getItemsOfOrdersImperative(ordersFilterdByCustomerName);
  const itemsWithCategoryKids = filterItemsByCategoryImperative(
    items,
    Category.Kids,
  );
  const totalPrice = getTotalPriceOfItemsImperative(itemsWithCategoryKids);

  return totalPrice;
};

export const getTotalPriceByCustomerNameAndCategoryPipe = (
  items: Item[],
): number => {
  return 0;
};

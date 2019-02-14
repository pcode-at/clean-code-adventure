import { Item } from './Item.model';
import { Customer } from './Customer.model';

export interface Order {
  items: Item[];
  customer: Customer;
}

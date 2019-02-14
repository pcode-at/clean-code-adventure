import { Category } from '../enum/Category.enum';

export interface Item {
  name: string;
  price: number;
  category: Category;
}

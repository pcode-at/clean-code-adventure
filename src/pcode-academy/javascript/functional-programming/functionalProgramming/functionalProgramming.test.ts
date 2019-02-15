import { Order } from '../model/Order.model';
import { Customer } from '../model/Customer.model';
import { Category } from '../types/Category.enum';
import { getTotalPriceOfItemsDeclarative } from './getTotalPriceOfItems';
import { Item } from '../model/Item.model';
import { filterOrdersByCustomerNameDeclarative } from './filterOrdersByCustomerName';
import { getItemsOfOrdersDeclarative } from './getItemsOfOrders';
import { filterItemsByCategoryDeclarative } from './filterItemsByCategory';

describe('functional programming', () => {
  const customers: Customer[] = [
    {
      name: 'John Doe',
    },
    { name: 'Maria Huber' },
    { name: 'Benjamin Steiner' },
  ];
  const orders: Order[] = [
    {
      customer: customers[0],
      items: [
        {
          name: 'T-Shirt',
          price: 15,
          category: Category.Kids,
        },
        {
          name: 'T-Shirt',
          price: 30,
          category: Category.Men,
        },
        {
          name: 'T-Shirt',
          price: 30,
          category: Category.Women,
        },
      ],
    },
    {
      customer: customers[1],
      items: [
        {
          name: 'T-Shirt',
          price: 15,
          category: Category.Kids,
        },
        {
          name: 'Socks',
          price: 15,
          category: Category.Kids,
        },
        {
          name: 'T-Shirt',
          price: 30,
          category: Category.Men,
        },
        {
          name: 'T-Shirt',
          price: 30,
          category: Category.Women,
        },
      ],
    },
    {
      customer: customers[2],
      items: [
        {
          name: 'T-Shirt',
          price: 15,
          category: Category.Kids,
        },
        {
          name: 'Socks',
          price: 9,
          category: Category.Kids,
        },
        {
          name: 'Shoes',
          price: 30,
          category: Category.Kids,
        },
        {
          name: 'T-Shirt',
          price: 30,
          category: Category.Men,
        },
        {
          name: 'T-Shirt',
          price: 30,
          category: Category.Women,
        },
      ],
    },
  ];

  it('should return orders filterd by customer name John Doe', () => {
    const filteredOrders: Order[] = [
      {
        customer: customers[0],
        items: [
          {
            name: 'T-Shirt',
            price: 15,
            category: Category.Kids,
          },
          {
            name: 'T-Shirt',
            price: 30,
            category: Category.Men,
          },
          {
            name: 'T-Shirt',
            price: 30,
            category: Category.Women,
          },
        ],
      },
    ];

    expect(filterOrdersByCustomerNameDeclarative(orders, 'John Doe')).toEqual(
      filteredOrders,
    );
  });

  it('should return all items of passed orders', () => {
    const items: Item[] = [...orders[0].items, ...orders[1].items];

    expect(getItemsOfOrdersDeclarative([orders[0], orders[1]])).toEqual(items);
  });

  it('should return items filterd by category Kids', () => {
    const filteredItems: Item[] = [
      {
        name: 'T-Shirt',
        price: 15,
        category: Category.Kids,
      },
      {
        name: 'T-Shirt',
        price: 15,
        category: Category.Kids,
      },
      {
        name: 'Socks',
        price: 15,
        category: Category.Kids,
      },
    ];

    expect(
      filterItemsByCategoryDeclarative(
        [...orders[0].items, ...orders[1].items],
        Category.Kids,
      ),
    ).toEqual(filteredItems);
  });

  it('should return total price of passed items', () => {
    expect(
      getTotalPriceOfItemsDeclarative([...orders[0].items, ...orders[1].items]),
    ).toEqual(165);
  });
});

// filter orders by customerName
// map orders to items
// filter items of order by category (kids)
// reduce for total price

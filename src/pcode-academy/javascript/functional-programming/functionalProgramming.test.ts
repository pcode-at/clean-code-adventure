import { Order } from './model/Order.model';
import { Customer } from './model/Customer.model';
import { Category } from './enum/Category.enum';
import {
  filterOrdersByCustomerNameDeclarative,
  filterItemsByCategoryDeclarative,
  getItemsOfOrdersDeclarative,
} from './functionalProgramming';
import { Item } from './model/Item.model';

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

  it.only('should return all items of passed orders', () => {
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
});

// filter orders by customerName
// filter items of order by category (kids)
// map for get array of prices
// reduce for total price

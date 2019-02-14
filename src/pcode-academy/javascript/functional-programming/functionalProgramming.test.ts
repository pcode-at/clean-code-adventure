import { Order } from './model/Order.model';
import { Customer } from './model/Customer.model';
import { Category } from './enum/Category.enum';
import {
  filterOrdersByCustomerNameImperative,
  filterOrdersByCustomerNameDeclarative,
} from './functionalProgramming';

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

    console.log(filterOrdersByCustomerNameImperative);

    expect(filterOrdersByCustomerNameDeclarative(orders, 'John Doe')).toEqual(
      filteredOrders,
    );
  });
});

// filter customer by name
// filter order by category (kids)
// map for get array of prices
// reduce for total price

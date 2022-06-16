const testState = {
  inventory: { fridge: null, pantry: null },
  shoppingLists: {
    1: {
      id: 1,
      items: [
        {
          id: 1,
          inCart: false,
          item: {
            category: 'Produce',
            categoryId: 1,
            fridge: false,
            id: 2,
            name: 'Apple',
          },
          measurement: {
            id: 1,
            unit: 'Each',
          },
          quantity: 3,
          shoppingListId: 1,
        },
      ],
      name: 'testList',
      userId: 1,
    },
  },
  categories: [
    { id: 1, name: 'Produce' },
    { id: 2, name: 'Butcher' },
    { id: 3, name: 'Seafood' },
    { id: 4, name: 'Deli' },
    { id: 5, name: 'Grains & Bread' },
    { id: 6, name: 'Baking & Cooking' },
    { id: 7, name: 'Dairy' },
    { id: 8, name: 'Beer & Wine' },
    { id: 9, name: 'Canned Goods' },
    { id: 10, name: 'Coffee & Tea' },
    { id: 11, name: 'Condiments' },
  ],
  items: {
    results: [
      {
        category: 'Produce',
        categoryId: 1,
        fridge: true,
        id: 1,
        name: 'Lettuce',
      },
    ],
  },
};

export default testState;

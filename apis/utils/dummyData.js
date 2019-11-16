export default {
  meals: [
    {
      id: '1',
      name: 'Fried Rice',
      size: 'Plates',
      price: '450',
      category: 'Rice Dish',
      currency: 'NGN',
    },
    {
      id: '2',
      name: 'Jollof Rice',
      size: 'Plates',
      price: '550',
      category: 'Rice Dish',      
      currency: 'NGN',
    },
    {
      id: '3',
      name: 'Beans',
      size: 'Plates',
      price: '150',
      category: 'Others',
      currency: 'NGN',
    },
    {
      id: '4',
      name: 'EBa & Semo',
      size: 'Plates',
      price: '300',
      category: 'Swallows',
      currency: 'NGN',
    },
  ],

  menu: [
    {
      id: '1',
      meal_id: '2',
      meal_name: 'Jollof Rice',
      price: '550',
      quantity: 24,
      day: '22/1/2019',
    },
    {
      id: '2',
      meal_id: '1',
      meal_name: 'Fried Rice',
      price: '450',
      quantity: '20',
      day: '22/1/2019',
    },
  ],

  order: [
    {
      id: '1',
      menu_id: '1',
      menu_name: 'Fried Rice',
      quantity: '2',
      price: '900',
      address: 'Ota, Ogun State',
      user: 'Femi Alayesanmi',
      day: '22/1/2019',
    },
    {
      id: '2',
      menu_id: '1',
      menu_name: 'Fried Rice',
      quantity: '2',
      price: '900',
      address: 'Ibadan, Oyo',
      user: 'Femi Alayesanmi',
      day: '22/1/2019',
    },
  ],

};

module.exports = {
  init: function() {
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
      {
        id: '0011001',
        name: 'Yoga Mat',
        image: 'yoga-mat.jpg',
        description: 'Prana non-slip yoga mat',
        variants: [
          {
            sku: '123123',
            type: 'rubber-pink',
            price: 56.00,
            inventory: 4
          },
          {
            sku: '123122',
            type: 'rubber-blue',
            price: 56.00,
            inventory: 2
          },
          {
            sku:'123121',
            type: 'rubber-purple-XL',
            price: 64.00,
            inventory: 1
          }
        ]
      }
    ]));
  }
};

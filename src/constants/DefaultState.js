export const defaultState = {
  store: [
    inCart: false,
    products: [
      {
        id: '123',
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
      },
      {
        id: '122',
        name: 'Yoga Top',
        image: 'yoga-top.jpg',
        description: 'Active Pink tie front yoga top',
        variants: [
          {
            sku: '122222',
            type: 'small-pink',
            price: 23.00,
            inventory: 2
          },
          {
            sku: '122223',
            type: 'medium-pink',
            price: 23.00,
            inventory: 1
          },
          {
            sku:'122224',
            type: 'large-pink',
            price: 23.00,
            inventory: 3
          }
        ]
      }
    ]
  ]
}

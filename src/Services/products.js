const getProducts = () => {
  return [
    {
      id: 1,
      picture_url: 'https://s3-sa-east-1.amazonaws.com/joaorigotti/iphone7.jpg',
      reviews: [
        {
          id: 1,
          name: 'joaorigotti',
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius ligula vitae sem iaculis.'
        },

        {
          id: 2,
          name: 'júlia',
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius ligula vitae sem iaculis.'
        },

        {
          id: 3,
          name: 'Fabrício',
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius ligula vitae sem iaculis.'
        }
      ],
      average_rating: 8.7
    },

    {
      id: 2,
      picture_url: 'https://s3-sa-east-1.amazonaws.com/joaorigotti/ps4-pro.jpg',
      reviews: [],
      average_rating: 8.9
    },

    {
      id: 3,
      picture_url: 'https://s3-sa-east-1.amazonaws.com/joaorigotti/smartwheel.jpg',
      reviews: [],
      average_rating: 6.9
    },

    {
      id: 4,
      picture_url: 'https://s3-sa-east-1.amazonaws.com/joaorigotti/xperia-z5.jpg',
      reviews: [],
      average_rating: 7
    },
  ];
}

export { getProducts }
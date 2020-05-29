let api = [
  {
    description: 'Get one order using its id',
    request: {
      method: 'get',
      url: '/rest/order/:id',
      params: ['id']
    },
    response: {
      content: {
          id: Number,
          first_name: String,
          last_name: String,
          phone: Number,
          contract: Number,
          data: Number,
          boomy_bass_box: Boolean,
          cloudy_insurance: Boolean,
          recognize_face: Boolean,
          price: Number,
          phone_number: Number,
          email: String,
          street: String,
          zip: Number,
          city: String,
          'order-placed': String
      }
    }
  },
  {
    description: 'Get all orders',
    request: {
      method: 'get',
      url: '/rest/orders'
    },
    response: {
      content: [
        {
          id: Number,
          first_name: String,
          last_name: String,
          phone: Number,
          contract: Number,
          data: Number,
          boomy_bass_box: Boolean,
          cloudy_insurance: Boolean,
          recognize_face: Boolean,
          price: Number,
          phone_number: Number,
          email: String,
          street: String,
          zip: Number,
          city: String,
          'order-placed': String
      }
      ]
    }
  },
  {
    description: 'Create one order',
    request: {
      method: 'post',
      url: '/rest/orders',
      body: {
        first_name: String,
        last_name: String,
        phone: Number,
        contract: Number,
        data: Number,
        boomy_bass_box: Boolean,
        cloudy_insurance: Boolean,
        recognize_face: Boolean,
        price: Number,
        phone_number: Number,
        email: String,
        street: String,
        zip: Number,
        city: String,
        'order-placed': String
      }
    },
    response: {
      "affectedRows": Number,
      "insertId": Number,
    }
  },
  {
    description: 'Update one order',
    request: {
      method: 'put',
      url: '/rest/orders/:id',
      params: ['id'
      ],
      body: {
        id: Number,
        first_name: String,
        last_name: String,
        phone: Number,
        contract: Number,
        data: Number,
        boomy_bass_box: Boolean,
        cloudy_insurance: Boolean,
        recognize_face: Boolean,
        price: Number,
        phone_number: Number,
        email: String,
        street: String,
        zip: Number,
        city: String,
        'order-placed': String
      }
    },
    response: {
      "affectedRows": Number,
    }
  },
  {
    description: 'Delete one order using its id',
    request: {
      method: 'delete',
      url: '/rest/orders/:id',
      params: ['id'
      ]
    },
    response: {
      "affectedRows": Number,
    }
  }
]
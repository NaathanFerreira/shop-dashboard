import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    createdAt: new Date().toISOString(),
    customer: {
      name: 'Jonh Doe',
      email: 'johndoe@example.com',
      phone: '17 91919191',
    },
    orderItems: [
      {
        id: 'custom-item-id',
        priceInCents: 2000,
        product: {
          name: 'pizza01',
        },
        quantity: 1,
      },
      {
        id: 'custom-item-id2',
        priceInCents: 3000,
        product: {
          name: 'pizza02',
        },
        quantity: 1,
      },
    ],
    status: 'pending',
    totalInCents: 5500,
  })
})

import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: '1',
      name: 'Jonh Doe',
      email: 'jonhdoe@example.com',
      phone: '17 9191-9191',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)

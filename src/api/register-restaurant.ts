import { api } from '@/lib/axios'

export interface RegisterRestaurantBody {
  restaurantName: string
  managerName: string
  phone: string
  email: string
}

export async function registerRestaurant(body: RegisterRestaurantBody) {
  await api.post('/restaurants', body)
}

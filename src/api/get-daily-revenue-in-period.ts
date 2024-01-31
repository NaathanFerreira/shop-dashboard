import { api } from '@/lib/axios'

type GetDailyRevenueInPeriodsParams = {
  from?: Date
  to?: Date
}

type GetDailyRevenueInPeriodsResponse = Array<{
  date: string
  receipt: number
}>

export async function getDailyRevenueInPeriods({
  from,
  to,
}: GetDailyRevenueInPeriodsParams) {
  const response = await api.get<GetDailyRevenueInPeriodsResponse>(
    '/metrics/daily-receipt-in-period',
    {
      params: {
        from,
        to,
      },
    },
  )

  return response.data
}

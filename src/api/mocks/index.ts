import { setupWorker } from 'msw/browser'

import { env } from '@/env'

export const worker = setupWorker()

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  console.log('enabling msw')
  await worker.start()
}

import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('E-mail').fill('johndoe@example.com')
  await page.getByRole('button', { name: 'Access panel' }).click()

  const toast = page.getByText('We send an authentication link to your email.')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('E-mail').fill('wrongemail@example.com')
  await page.getByRole('button', { name: 'Access panel' }).click()

  const toast = page.getByText('Wrong credentials.')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'New restaurant' }).click()

  expect(page.url()).toContain('/sign-up')

  await page.waitForTimeout(2000)
})

import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Restaurant name').fill('Pizza Dev')
  await page.getByRole('button', { name: 'Register' }).click()

  const toast = page.getByText('Restaurant successfully registered!')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('sign up with wrong restaurant name', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Restaurant name').fill('Wrong Name')
  await page.getByRole('button', { name: 'Register' }).click()

  const toast = page.getByText('Error while register restaurant.')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Login' }).click()

  expect(page.url()).toContain('/sign-in')

  await page.waitForTimeout(2000)
})

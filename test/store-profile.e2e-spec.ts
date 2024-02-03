import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Store profile' }).click()
  await page.getByLabel('Name').fill('Pizza Shop 2')
  await page.getByRole('button', { name: 'Save' }).click()

  // wait for the http requests to end
  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Profile updated successfully!')

  await page.getByRole('button', { name: 'Close' }).click()

  expect(toast).toBeVisible()
  expect(page.getByRole('button', { name: 'Pizza Shop 2' })).toBeVisible()

  await page.waitForTimeout(2000)
})

test('update profile with invalid name', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Store profile' }).click()
  await page.getByLabel('Name').fill('Pi')
  await page.getByRole('button', { name: 'Save' }).click()

  // wait for the http requests to end
  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Failed to update your profile, try again!')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

// test('navigate to login page', async ({ page }) => {
//   await page.goto('/sign-up', { waitUntil: 'networkidle' })

//   await page.getByRole('link', { name: 'Login' }).click()

//   expect(page.url()).toContain('/sign-in')

//   await page.waitForTimeout(2000)
// })

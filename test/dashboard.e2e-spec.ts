import { expect, test } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20', { exact: true })).toBeVisible()
  expect(
    page
      .locator('div')
      .filter({ hasText: /^20-5% compared to last month$/ })
      .getByRole('paragraph'),
  ).toBeVisible()

  await page.waitForTimeout(2000)
})

test('month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('200', { exact: true })).toBeVisible()
  expect(page.getByText('+7% compared to last month')).toBeVisible()

  await page.waitForTimeout(2000)
})

test('month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('$200.00')).toBeVisible()
  expect(page.getByText('+10% compared to last month')).toBeVisible()

  await page.waitForTimeout(2000)
})

test('month cancelations metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('32')).toBeVisible()
  expect(
    page
      .locator('div')
      .filter({ hasText: /^32-5% compared to last month$/ })
      .getByRole('paragraph'),
  ).toBeVisible()

  await page.waitForTimeout(2000)
})

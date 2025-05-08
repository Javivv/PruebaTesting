import { test, expect } from '@playwright/test';

test('Prueba 1 ejemplo bien', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('Prueba 2 ejemplo fallo', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // await page.pause()

  // Click the get started link.
  const textoEsperado = await page.getByRole('link', { name: 'Docs' }).textContent()

  expect(textoEsperado).toBe('Ejemplo para el fallo')

});

test('Prueba 3 ejemplo fallo', async ({ page }, TestInfo) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
	await TestInfo.attach('Prueba', { body: await page.screenshot(), contentType: 'image/png' });
});

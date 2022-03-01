describe('My Login application', () => {
  it('should login with valid credentials', async () => {
    await browser.url('/login')

    await $('#username').setValue('tomsmith')
    await $('#password').setValue('SuperSecretPassword!')
    await $('button[type="submit"]').click()

    await expect($('#flash')).toBeExisting()
    await expect($('#flash')).toHaveTextContaining(
      'You logged into a secure area!'
    )
  })
})

describe('Checkboxes test', () => {
  it('should validate checkboxes ', async () => {
    const cb1 = await $('#checkboxes input:first-Child')
    const cb2 = await $('#checkboxes input:last-Child')
    await browser.url('/checkboxes')
    await expect($('#checkboxes')).toBeDisplayed()
    await expect(cb1).not.toBeSelected()
    await expect(cb2).toBeSelected()
    await cb1.click()
    await expect(cb1).toBeSelected()
    await expect(cb2).toBeSelected()
  })
})

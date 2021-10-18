const { I } = inject();
// Add in your custom step files

Given('I have a defined step', () => {
  // TODO: replace with your own step
  I.amOnPage('')
});
When('i see youtube', () => {
  I.seeElement({id:'endpoint'})
})
Then('oke', () => {
  I.wait(2)
})
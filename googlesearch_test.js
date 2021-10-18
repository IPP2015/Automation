const { action } = require("commander");

Feature('googlesearch');

Scenario('youtube-search', ({ I }) => {
    I.amOnPage('/');
    I.fillField('Search','bmht');
    I.click('Search');
    
    
});
Scenario('youtube-search2', ({ I }) => {
    I.amOnPage('/');
    I.fillField('Search','bmht');
    I.click('Search');
    
});

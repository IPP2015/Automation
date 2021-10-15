Feature('googlesearch');

Scenario('youtube-search', ({ I }) => {
    I.amOnPage('');
    I.fillField('Search','bmht');
    I.click('Search');
});

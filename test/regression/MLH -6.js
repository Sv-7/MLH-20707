const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require ('../../helpers/inputValues4');
const inputValues4AndClick = require ('../../helpers/inputValue4AndClick');
const path = require('path');

describe('Other tests', function () {

    before(() => {
        browser.url('https://qa-apps.netlify.app/app_my_hero');
    });

    it('TC-083 The list is enabled only in certain situations ', function () {
        inputValues4(data.name, data.gender.he, data.age, data.storyType.Comedy);
        $(sel.create).click();
        const btn = $(sel.tryAgain).isDisplayed();
        expect(btn).toEqual(true);
    });
});


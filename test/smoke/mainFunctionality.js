const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require ('../../helpers/inputValues4');
const inputValues4AndClick = require ('../../helpers/inputValue4AndClick');

describe('Checking the main functionality', function () {
    describe('Happy path', function () {

        it('TC-032 Create button is clickable after 1-4 are filled in', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4(data.name, data.gender.she, data.age, data.storyType);
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(true);
        });

    });

    describe('Other tests', function () {

        it('TC-033 "He" choice does not break functionality ', function () {
            inputValues4(data.name, data.gender.he, data.age, data.storyType);
            $(sel.create).click();
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);

            $(sel.tryAgain).click();

        });

        it('TC-034 ...', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4AndClick (data.name, data.gender.he, data.age, data.storyType);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

    });

});
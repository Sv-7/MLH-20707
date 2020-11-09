const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');
const data = require('../../data/testData.json');

describe('Age field inputs validation', function () {

    describe('Age field Positive tests', function () {

        it('TC-01 Age', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const age = $(sel.age);
            age.setValue((data.age)[0]);
            const ageRes = age.getAttribute('aria-valuenow');
            expect(+ageRes).toEqual((data.age)[0]);
        });

    });

    describe('Age field Negative tests', function () {

       it('TC-02 Age Negative - string', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const age = $(sel.age);
            age.setValue((data.age)[1]);
            const ageRes = age.getAttribute('aria-valuenow');
            const alert = $('[role = alert]');
            browser.pause(3000);
            expect(alert.getText()).toEqual('looks like unreal age');
        });

    });

});

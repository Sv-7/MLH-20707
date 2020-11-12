const sel = require('../../data/selectors.json');
const clearInputValue = require('../../helpers/clearInput');
const testData = require('../../data/testData.json');

before(() => {
    browser.url('https://qa-apps.netlify.app/app_my_hero'); //open baseUrl
});

describe('My Little Hero: Name Values Checking', function () {

    describe('Getting to the page', function () {

        beforeEach(() => {
            clearInputValue.clearInputValue($(sel.name));
        });

        it('TC-046 Placeholder is correct ', function () {
            const inputName = $(sel.name);
            const namePlaceHolder = inputName.getAttribute('placeholder');
            expect(namePlaceHolder).toEqual(testData.namePlaceHolder);
            //browser.pause(4000);
        });

        it('TC-047 Validation if the Name field is enabled to input only letters', function () {
            const inputName = $(sel.name);

            const isEnabled = inputName.isEnabled();
            expect(isEnabled).toEqual(true);

            inputName.setValue(testData.name047);
            expect(inputName.getValue()).toEqual(testData.name047);

        });

        it('TC-048 Validation if the Name field is enabled to input only digits', function () {
            const inputName = $(sel.name);

            inputName.setValue(testData.name048);
            expect(inputName.getValue()).toEqual(testData.name048);

        });

        it('TC-049 Validation if the Name field is enabled to input only special symbols', function () {
            const inputName = $(sel.name);

            inputName.setValue(testData.name049);
            expect(inputName.getValue()).toEqual(testData.name049);

        });

        it('TC-050 Validation if the Name field is enabled to input only uppercase letters', function () {
            const inputName = $(sel.name);

            inputName.setValue(testData.name050);
            expect(inputName.getValue()).toEqual(testData.name050);

        });

        it('TC-051 Validation if the Name field is enabled to input only lowercase letters', function () {
            const inputName = $(sel.name);

            inputName.setValue(testData.name051);
            expect(inputName.getValue()).toEqual(testData.name051);

        });

        it('TC-052 Validation if the Name field is enabled to input only semicase letters', function () {
            const inputName = $(sel.name);

            inputName.setValue(testData.name052);
            expect(inputName.getValue()).toEqual(testData.name052);

        });

        it('TC-053 Validation if the Name field is enabled to input only camelcase letters', function () {
            const inputName = $(sel.name);

            inputName.setValue(testData.name053);
            expect(inputName.getValue()).toEqual(testData.name053);

        });

        it('TC-054 Validation if the Name field is enabled to input combination of symbols', function () {
            const inputName = $(sel.name);

            inputName.setValue(testData.name054);
            expect(inputName.getValue()).toEqual(testData.name054);

        });

        it('TC-056 Validation if the Name field is enabled to input letters with space', function () {
            const inputName = $(sel.name);

            inputName.setValue(testData.name056);
            expect(inputName.getValue()).toEqual(testData.name056);

        });

        it('TC-057 Validation if the Name field is enabled to input limited 70 symbols', function () {
            const inputName = $(sel.name);

            inputName.setValue(testData.name057);
            expect(inputName.getValue()).toEqual(testData.name057);

        });

        it('TC-058 Validation if the Name field isn\'t enabled to input 71 symbols', function () {
            const inputName = $(sel.name);

            inputName.setValue(testData.name058);
            const alert = $(sel.alert);
            //console.log('ALERT: ' + alert.getText());
            expect(alert.getText()).toEqual('70 symbols max');

        });

        it('TC-059 Validation if the Name field isn\'t enabled to leave field empty', function () {
            const inputName = $(sel.name);

            inputName.setValue(testData.name059);
            const alert = $(sel.alert);
            expect(alert.getText()).toEqual('Required');

        });

        it('TC-055 Validation if the Name field isn\'t enabled to input only spaces', function () {
            const inputName = $(sel.name);

            inputName.setValue(testData.name055);
            expect(inputName.getValue()).toEqual(testData.name059);

        });
    });

});
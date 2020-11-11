const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');
const data = require('../../data/testData.json');
const clearInputValue = require("../../helpers/clearInputValue");
const ageSetValuePositivePath = require("../../helpers/ageSetValuePositivePath");
const ageSetValueNegativePathALERT = require("../../helpers/ageSetValueNegativePathALERT");
const inputValues4 = require("../../helpers/inputValues4");

describe('Age field inputs validation', function () {

    describe('Age field input Positive tests', function () {

        before(() => {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy)
        });

        beforeEach(() => {
            clearInputValue($(sel.age));
        });

        it('TC-01 Age Pos test input: 1', function () {
            ageSetValuePositivePath($(sel.age), data.agePos, 0);
            expect($(sel.create).isEnabled()).toEqual(true);
        });

        it('TC-02 Age Pos test input 6 digits: 654321', function () {
            ageSetValuePositivePath($(sel.age), data.agePos, 1);
            expect($(sel.create).isEnabled()).toEqual(true);
        });

        it('TC-03 Age Pos test input 12 digits: 120987654321', function () {
            ageSetValuePositivePath($(sel.age), data.agePos, 2);
            expect($(sel.create).isEnabled()).toEqual(true);
        });

    });

    describe('Age field input Negative tests', function () {

        before(() => {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy)
        });

        beforeEach(() => {
            clearInputValue($(sel.age));
        });

        it('TC-01 Age Neg test input string: "a"', function () {
            const alert = ageSetValueNegativePathALERT($(sel.age), data.ageNeg, 0);
            expect(alert).toEqual(exp.ageAlertLooksLikeUnrealAge);
            expect($(sel.create).isEnabled()).toEqual(false);
        });

        it('TC-02 Age Neg test input >12 digits: 1120987654321', function () {
            const alert = ageSetValueNegativePathALERT($(sel.age), data.ageNeg, 1);
            expect(alert).toEqual(exp.ageAlertLooksLikeUnrealAge);
            expect($(sel.create).isEnabled()).toEqual(false);
        });

        it('TC-03 Age Neg test input digits + e: "123456e"', function () {
            const alert = ageSetValueNegativePathALERT($(sel.age), data.ageNeg, 2);
            expect(alert).toEqual(exp.ageAlertLooksLikeUnrealAge);
            expect($(sel.create).isEnabled()).toEqual(false);
        });

        it('TC-04 Age Neg test input <0: -2', function () {
            const alert = ageSetValueNegativePathALERT($(sel.age), data.ageNeg, 3);
            expect(alert).toEqual(exp.ageAlertLooksLikeUnrealAge);
            expect($(sel.create).isEnabled()).toEqual(false);
        });

        it('TC-05 Age Neg test input with decimals: 0.56', function () {
            const alert = ageSetValueNegativePathALERT($(sel.age), data.ageNeg, 4);
            expect(alert).toEqual(exp.ageAlertLooksLikeUnrealAge);
            expect($(sel.create).isEnabled()).toEqual(false);
        });

        it('TC-06 Age Neg test input a dot: "."', function () {
            const alert = ageSetValueNegativePathALERT($(sel.age), data.ageNeg, 5);
            expect(alert).toEqual(exp.ageAlertLooksLikeUnrealAge);
            expect($(sel.create).isEnabled()).toEqual(false);
        });

        it('TC-07 Age Neg test input space: " "', function () {
            const alert = ageSetValueNegativePathALERT($(sel.age), data.ageNeg, 6);
            expect(alert).toEqual(exp.ageAlertRequired);
            expect($(sel.create).isEnabled()).toEqual(false);
        });

    });

    describe('Age field input with Arrow Up/Down', function () {

        before(() => {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy)
        });

        beforeEach(() => {
            clearInputValue($(sel.age));
        });

        it('TC-01 Age input arrow UP = 1', function () {
            //ageSetValuePositivePath($(sel.age), data.agePos, 0);
            $(sel.ageArrowUp).click();
            expect($(sel.create).isEnabled()).toEqual(true);
        });

        it('TC-02 Age input arrow UP to >12 symbols = ', function () {
            $(sel.age).setValue((data.agePos)[2]);
            $(sel.ageArrowUp).click();
            expect($(sel.create).isEnabled()).toEqual(false);
            browser.pause(1000);
            const result = $(sel.ageAlert).getText();
            expect(result).toEqual(exp.ageAlertLooksLikeUnrealAge);
        });

        it('TC-03 Age input arrow down to 0', function () {
            $(sel.age).setValue((data.ageNeg)[7]);
            $(sel.ageArrowDown).click();
            expect($(sel.create).isEnabled()).toEqual(false);
        });

        it('TC-04 Age input arrow down to <0', function () {
            $(sel.age).setValue((data.ageNeg)[7]);
            $(sel.ageArrowDown).click();
            expect($(sel.create).isEnabled()).toEqual(false);
        });

    });

});

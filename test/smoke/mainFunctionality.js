const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require ('../../helpers/inputValues4');
const inputValues4AndClick = require ('../../helpers/inputValue4AndClick');
const path = require('path');

describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        before(() => {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
        });

        it('TC-032 Create button is clickable after 1-4 are filled in', function () {
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy);
            browser.pause(3000);
            const create = $(sel.create).isEnabled();
            console.log("88888888" + create);

            expect(create).toEqual(true);
        });

    });

   describe('Other tests', function () {

        before(() => {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
        });

        it('TC-033 "He" choice does not break functionality ', function () {
            inputValues4(data.name, data.gender.he, data.age, data.storyType.Comedy);
            $(sel.create).click();
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        // Add tests for She, It, fields filled in different order, image png, image jpeg, Try Again.
        // it('TC-034 ...', function () {
        //     inputValues4AndClick (data.name, data.gender.he, data.age, data.storyType.Comedy);
        //     const btn = $(sel.tryAgain).isDisplayed();
        //     expect(btn).toEqual(true);
        // });

        describe('MLH-7 Image is uploading (600px - jpg)', function () {

            it('TC-035  Image is uploading (600px - jpg)', function () {
                browser.url('');
                inputValues4(data.name, data.gender.he, data.age,data.storyType.Comedy);
                browser.pause(2000);
                const inputDiv = $('.ant-upload input');
                const SubmitButton = $(sel.create);
                const filePath = path.join(__dirname, '../../data/qa-course.jpg');
                const removeFilePath = browser.uploadFile(filePath);
                browser.execute(function (){
                    document.getElementsByTagName('input')[6].style.display = 'block';
                });
                inputDiv.waitForDisplayed();
                browser.pause(2000);
                inputDiv.setValue(removeFilePath);
                browser.pause(2000);
                SubmitButton.click();
                browser.pause(3000);
                const btn = $(sel.tryAgain).isDisplayed();
                expect(btn).toEqual(true);
            });
        });

    });

});

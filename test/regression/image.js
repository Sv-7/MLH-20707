const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const inputValues4 = require ('../../helpers/inputValues4');
const path = require('path');

describe('Checking the image upload functionality', function () {

    describe('Happy path', function () {

        before(() => {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
        });

        describe('MLH-7 Image is uploading (600px - jpg)', function () {

            it('TC-095  Image is uploading (600px - jpg)', function () {
                browser.url('');
                inputValues4(data.name, data.gender.he, data.age,data.storyType.Comedy);
                browser.pause(2000);
                const inputDiv = $(sel.inputDiv);
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

            it('TC-095  Image is uploading (png)', function () {
                browser.url('');
                inputValues4(data.name, data.gender.he, data.age,data.storyType.Comedy);
                browser.pause(2000);
                const inputDiv = $(sel.inputDiv);
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


            it('TC-103  Image is visible on Story Page', function () {
                browser.url('');
                inputValues4(data.name, data.gender.he, data.age,data.storyType.Comedy);
                browser.pause(2000);
                const inputDiv = $(sel.inputDiv);
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

                const imageSize = $(sel.uploadedImage)
                expect(imageSize).not.toHaveAttributeContaining('src', '/static/error.86e8f937.png')

            });

            it('TC-105  Image is 200px - jpg on Story Page)', function () {
                browser.url('');
                inputValues4(data.name, data.gender.he, data.age,data.storyType.Comedy);
                browser.pause(2000);
                const inputDiv = $(sel.inputDiv);
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

                const imageSize = $(sel.uploadedImage)
                expect(imageSize).toHaveElementProperty('width', 200)

            });

            it('TC-038  No Image is visible on Story Page if No image upload file selected', function () {
                browser.url('');
                inputValues4(data.name, data.gender.he, data.age,data.storyType.Comedy);
                browser.pause(2000);
                const inputDiv = $(sel.inputDiv);
                const SubmitButton = $(sel.create);

                browser.pause(2000);
                SubmitButton.click();
                browser.pause(3000);

                const btn = $(sel.tryAgain).isDisplayed();
                expect(btn).toEqual(true);

                const imageSize = $(sel.uploadedImage)
                expect(imageSize).toHaveAttributeContaining('src', '/static/error.86e8f937.png')

            });
        });
    });
});


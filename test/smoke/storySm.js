const sel = require ('../../data/selectors.json');
const data = require ('../../data/testStory.json');
const inputValues4andClick = require ('../../helpers/inputValue4AndClick');
const inputValues4 = require ('../../helpers/inputValues4');
const selSt = require ('../../data/selectorsStory.json');
const tComedy = require ('../../data/textComedy.json')
const path = require('path');

describe('Checking the main functionality', function () {
    describe('MLH-10-story - Smoke tests - Pairwise', function () {

        beforeEach(() => {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
        });


        it('TC-112 #1 Pairwise - Verify that the story text is displayed correctly  after a combination of required and optional inputs is submitted by clicking "Create" button', function () {
            inputValues4andClick (data.name[0], data.gender.he, data.age[0], data.storyType.Comedy);
            const comedyNameText = $(sel.storyName).getText();
            expect(comedyNameText).toEqual(tComedy.comedyName);

            const comConTx = $(selSt.storyForReading).getText();
            const comedyContextText = comConTx.startsWith(tComedy.comedyContext)
            expect(comedyContextText).toEqual(true);

            const stMoral = $(selSt.storyMoral).isDisplayed();
            expect(stMoral).toEqual(true);

            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        it('TC-123 #12 Pairwise - Verify that the story text is displayed correctly  after a combination of required and optional inputs is submitted by clicking "Create" button', function () {
            inputValues4 (data.name[0], data.gender.it, data.age[0], data.storyType.Comedy);
            browser.pause(2000);
            const inputDiv = $(sel.inputDiv);
            const SubmitButton = $(sel.submitButton);
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

            const comedyNameText = $(selSt.storyName).getText();
            expect(comedyNameText).toEqual(tComedy.comedyName);

            const comConTx = $(selSt.storyForReading).getText();
            const comedyContextText = comConTx.startsWith(tComedy.comedyContext)
            expect(comedyContextText).toEqual(true);

            const stMoral = $(selSt.storyMoral).isDisplayed();
            expect(stMoral).toEqual(true);

            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        it('TC-133 #22 Pairwise - Verify that the story text is displayed correctly  after a combination of required and optional inputs is submitted by clicking "Create" button', function () {
            inputValues4 (data.name[0], data.gender.she, data.age[0], data.storyType.Comedy);
            browser.pause(2000);
            const inputDiv = $(sel.inputDiv);
            const SubmitButton = $(sel.submitButton);
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

            const comedyNameText = $(selSt.storyName).getText();
            expect(comedyNameText).toEqual(tComedy.comedyName);

            const comConTx = $(selSt.storyForReading).getText();
            const comedyContextText = comConTx.startsWith(tComedy.comedyContext)
            expect(comedyContextText).toEqual(true);

            const stMoral = $(selSt.storyMoral).isDisplayed();
            expect(stMoral).toEqual(true);

            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });
    });
});

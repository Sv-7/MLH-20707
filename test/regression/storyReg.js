const sel = require ('../../data/selectors.json');
const data = require ('../../data/testStory.json');
const inputValues4andClick = require ('../../helpers/inputValue4AndClick');
const inputValues4 = require ('../../helpers/inputValues4');
const exp = require ('../../data/expected.json');
const path = require('path');
const tComedy = require ('../../data/testComedy.json')
const findTextName = require ('../../helpers/findTextName');

describe('Checking the main functionality', function () {
    describe('Try again button', function () {

        beforeEach(() => {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
        });


        it('TC-041 Verify that try again button is present after story context or morale is present', function () {
            inputValues4andClick (data.name[1], data.gender.it, data.age[1], data.storyType.Comedy);
            browser.pause(2000)
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        it('TC-042 Verify that try again button name is Try Again!', function () {
            inputValues4andClick (data.name[1], data.gender.it, data.age[1], data.storyType.Comedy);
            browser.pause(2000)
            const trText = $(sel.tryAgain).getText();
            expect(trText).toEqual(exp.tryAgainBtn);
        });

        it('TC-111 Verify that the "Try again!" button is present and active when the story text displayed', function () {
            inputValues4andClick (data.name[1], data.gender.it, data.age[1], data.storyType.Comedy);
            browser.pause(2000)
            const trText = $(sel.tryAgain).isClickable();
            expect(trText).toEqual(true);
        });

        it('TC-111 Verify that the "Try again!" button is present and active when the story text displayed-2', function () {
            inputValues4andClick (data.name[1], data.gender.it, data.age[1], data.storyType.Comedy);
            browser.pause(2000)
            $(sel.tryAgain).click();
            browser.pause(3000)
            const pMain = $(sel.paragraph).isDisplayed();
            expect(pMain).toEqual(true);

        });

        it('TC-113 #2 Pairwise - Verify that the story text is displayed correctly  after a combination of required and optional inputs is submitted by clicking "Create" button', function () {
            inputValues4 (data.name[0], data.gender.he, data.age[0], data.storyType.Comedy);
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

            const comedyNameText = $(sel.storyName).getText();
            expect(comedyNameText).toEqual(tComedy.comedyName);

            const comConTx = $(sel.story4Name).getText();
            const comedyContextText = comConTx.startsWith(tComedy.comedyContext)
            expect(comedyContextText).toEqual(true);

            const stMoral = $(sel.storyMoral).isDisplayed();
            expect(stMoral).toEqual(true);

            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        it('TC-134 #23 Pairwise - Verify that the story text is displayed correctly  after a combination of required and optional inputs is submitted by clicking "Create" button', function () {
            inputValues4andClick (data.name[0], data.gender.she, data.age[0], data.storyType.Comedy);

            const comedyNameText = $(sel.storyName).getText();
            expect(comedyNameText).toEqual(tComedy.comedyName);

            const comConTx = $(sel.story4Name).getText();
            const comedyContextText = comConTx.startsWith(tComedy.comedyContext)
            expect(comedyContextText).toEqual(true);

            const stMoral = $(sel.storyMoral).isDisplayed();
            expect(stMoral).toEqual(true);

            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

    });
    describe('Story Text', function () {

        beforeEach(() => {
            browser.url('');
        });

        xit('TC-190 Verify that story/s header is present', function () {
            inputValues4andClick(data.name[1], data.gender.it, data.age[1], data.storyType.Comedy);
            browser.pause(2000)
            const h3Story = $(sel.headerStory).isDisplayed();
            expect(h3Story).toEqual(true);
        });

        xit('TC-191 Verify that story/s header text is correct', function () {
            inputValues4andClick(data.name[1], data.gender.it, data.age[1], data.storyType.Comedy);
            browser.pause(2000)
            const h3StText = $(sel.headerStory).getText();
            expect(h3StText).toEqual(exp.hStory);
        });

        xit('TC-192 Verify that story/s name is present', function () {
            inputValues4andClick(data.name[1], data.gender.it, data.age[1], data.storyType.Comedy);
            browser.pause(2000)
            const stName = $(sel.storyName).isDisplayed();
            expect(stName).toEqual(true);
        });

        xit('TC-193 Verify that story/s name text is correct for Comedy', function () {
            inputValues4andClick(data.name[1], data.gender.it, data.age[1], data.storyType.Comedy);
            browser.pause(2000)
            const comedyNameText = $(sel.storyName).getText();
            expect(comedyNameText).toEqual(tComedy.comedyName);
        });

        xit('TC-194 Verify that story/s context is present', function () {
            inputValues4andClick(data.name[1], data.gender.it, data.age[1], data.storyType.Comedy);
            browser.pause(2000)
            const stContext = $(sel.story4Name).isDisplayed();
            expect(stContext).toEqual(true);
        });

        it('TC-195 Verify that story/s context text is correct for Comedy', function () {
            inputValues4andClick(data.name[1], data.gender.it, data.age[1], data.storyType.Comedy);
            browser.pause(2000)
            const comConTx = $(sel.story4Name).getText();
            const comedyContextText = comConTx.startsWith(tComedy.comedyContext)
            expect(comedyContextText).toEqual(true);
        });


        it('Test Name in the story', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            for(let i = 0; i < data.name.length; i++) {
                const inputValues4AndClick = (data.name, data.gender.she, data.name[i],
                    data.storyType.Comedy);
                let textName = findTextName();
                console.log(textName);
                $(sel.tryAgain).click();
                expect(textName).toEqual(data.name[i] + '');
            }
        });

        xit('TC-196 Verify that story/s moral is present', function () {
            inputValues4andClick(data.name[1], data.gender.it, data.age[1], data.storyType.Comedy);
            browser.pause(2000)
            const stMoral = $(sel.storyMoral).isDisplayed();
            expect(stMoral).toEqual(true);
        });

        xit('TC-197 Verify that story/s moral text is correct for Comedy', function () {
            inputValues4andClick(data.name[1], data.gender.it, data.age[1], data.storyType.Comedy);
            browser.pause(2000)
            const comedyNameText = $(sel.storyMoral).getText();
            expect(comedyNameText).toEqual(tComedy.comedyMoral);
        });

    });


});


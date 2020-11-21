const sel = require ('../../data/selectors.json');
const data = require ('../../data/testStory.json');
const inputValues4andClick = require ('../../helpers/inputValue4AndClick');
const exp = require ('../../data/expected.json');



describe('Checking the main functionality', function () {
    describe('Try again button', function () {

        beforeEach(() => {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
        });


        it('TC-041 Verify that try again button is present after story context or morale is present', function () {
            inputValues4andClick (data.name[1], data.gender.it, data.age[1], data.storyType.Comedy);
            $(sel.tryAgain).waitForDisplayed(2000);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        it('TC-042 Verify that try again button name is Try Again!', function () {
            inputValues4andClick (data.name[1], data.gender.it, data.age[1], data.storyType.Comedy);
            $(sel.tryAgain).waitForDisplayed(2000);
            const trText = $(sel.tryAgain).getText();
            expect(trText).toEqual(exp.tryAgainBtn);
        });

        it('TC-111 Verify that the "Try again!" button is present and active when the story text displayed', function () {
            inputValues4andClick (data.name[1], data.gender.it, data.age[1], data.storyType.Comedy);
            $(sel.tryAgain).waitForDisplayed(2000);
            const trText = $(sel.tryAgain).isClickable();
            expect(trText).toEqual(true);
        });

        it('TC-111 Verify that the "Try again!" button is present and active when the story text displayed-2', function () {
            inputValues4andClick (data.name[1], data.gender.it, data.age[1], data.storyType.Comedy);
            $(sel.tryAgain).waitForDisplayed(2000);
            $(sel.tryAgain).click();
            $(sel.paragraph).waitForDisplayed(2000);
            const pMain = $(sel.paragraph).isDisplayed();
            expect(pMain).toEqual(true);

        });
    });
});


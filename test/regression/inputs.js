const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');

describe('Inputs', function () {

    describe('Inputs are displayed', function () {

        it('TC-016 Input field Name ', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const name = $(sel.name).isDisplayed();
            expect(name).toEqual(true);
        });

        it('TC-017 Input field  Gender (he)', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-018 Input field Gender (she)', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-019 Input field Gender (it)', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-020 Input field Age', function () {
            const age = $(sel.age).isDisplayed();
            expect(age).toEqual(true);
        });

        it('TC-021 Input field Story', function () {
            const story = $(sel.story).isDisplayed();
            expect(story).toEqual(true);
        });

        it('TC-022 Input field Imaging drag-and-drop is present',
            function () {
            const image = $(sel.image).isDisplayed();
            expect(image).toEqual(true);
        });

        it('TC-023 Create button', function () {
            const create = $(sel.create).isDisplayed();
            expect(create).toEqual(true);
        });
    });

    describe('Placeholders in input fields are displayed', function () {

        it('TC-024 Placeholder Name', function () {
            const placeholderName = $(sel.name).getAttribute('placeholder');
            expect(placeholderName).toEqual(exp.placeholderName);
        });

        it('TC-025 Placeholder Gender (he)', function () {
            const gender = $$(sel.genderOptions)[0].getText();
            expect(gender).toEqual(exp.placeholderGenderHe);
        });

        it('TC-026 Placeholder Gender (she)', function () {
            const gender = $$(sel.genderOptions)[1].getText();
            expect(gender).toEqual(exp.placeholderGenderShe);
        });

        it('TC-027 Placeholder Gender (it)', function () {
            const gender = $$(sel.genderOptions)[2].getText();
            expect(gender).toEqual(exp.placeholderGenderIt);
        });

        it('TC-028 Placeholder Age', function () {
            const age = $(sel.age).getAttribute('placeholder');
            expect(age).toEqual(exp.placeholderAge);
        });

        it('TC-029 Placeholder Story', function () {
            const story = $(sel.storyPlaceHold).getText();
            expect(story).toEqual(exp.placeholderStory);
        });

        it('TC-030 Placeholder Imaging drag-and-drop', function () {
            const image = $(sel.image).getText();
            expect(image).toEqual(exp.placeholderImage);
        });

       it('TC-031 Text on submit button = Create!', function () {
            const create = $(sel.create).getText();
            expect(create).toEqual(exp.submitButton);
        });

    });

});

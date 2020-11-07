const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json')

describe('My Little Hero', function () { //define suite title by passing a string

    describe('Getting to the page', function () { //define sub-suite title by passing a string

        it('TC-001 Title is correct ', function () { //define test title by passing a string
            browser.url('https://qa-apps.netlify.app/app_my_hero'); //open baseUrl
            let title = browser.getTitle(); //get page title and assign it to the "title" variable
            //browser.pause(2000); //just pause to visually see that something is happening on the page
            expect(title).toEqual('MLH trial'); //compare {title} (actual) and "MLH trial" (expected)
        });

    });

    describe('Page title and description are present and correct text is displayed',
        function () { //define sub-suite title by passing a string

        it('TC-002 Page title (H3) is displayed', function () {
            const head3 = $(sel.head3).isDisplayed();
            expect(head3).toEqual(true);
        });

        it('TC-003 Page title (H3) text is correct', function () {
            const head3 = $(sel.head3).getText();
            expect(head3).toEqual(exp.textH3);
        });

        it('TC-004 Page description (p) is displayed', function () {
            const p = $(sel.paragraph).isDisplayed();
            expect(p).toEqual(true);
        });

        it('TC-005 Page description (p) text is correct', function () {
            const p = $(sel.paragraph).getText();
            expect(p).toEqual(exp.textP);
        });

    });

    describe('Labels exist', function () {

        it('TC-006 Label for name', function () {
            const label = $$(sel.label)[0].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-007 Label for gender', function () {
            const label = $$(sel.label)[1].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-008 Label for age', function () {
            const label = $$(sel.label)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-009 Label for story', function () {
            const label = $$(sel.label)[3].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-0010 Label for Images', function () {
            const label = $$(sel.label)[4].isDisplayed();
            expect(label).toEqual(true);
        });

    });

    describe('Labels are correct', function () {
// to check the text we can use both(?) getAttribute("title") OR/AND getText().
// May be selector ".ant-col.ant-col-16.ant-form-item-label" works only with getText()

        it('TC-011 Label for name = 1. What is your HERO\'s name?', function () {
            const text = $$(sel.label)[0].getText();
            expect(text).toEqual(exp.labelName);
        });

        it('TC-012 Label for gender = 2. Please choose a gender.', function () {
            const text = $$(sel.label)[1].getText();
            expect(text).toEqual(exp.labelGender);
        });

        xit('TC-013 Label for age = 3. How old is your Hero?', function () {
            const text = $$(sel.label)[2].getText();
            expect(text).toEqual(exp.labelAge);
        });

        it('TC-014 Label for story = 4. What type of story would you like to read?',
            function () {
            const text = $$(sel.label)[3].getText();
            expect(text).toEqual(exp.labelStory);
        });

        it('TC-015 Label for Image = 5. Upload an image (optional)', function () {
            const text = $$(sel.label)[4].getText();
            expect(text).toEqual(exp.labelImage);
        });

    });

});

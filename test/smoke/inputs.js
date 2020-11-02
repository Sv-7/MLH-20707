const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');
describe('Inputs', function () {
    describe('Inputs are displayed', function () {
        it('TC-014 Name ', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const name = $(sel.name).isDisplayed();
            expect(name).toEqual(true);
        });
        it('TC-015 Gender (he)', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-016 Gender (she)', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-017 Gender (it)', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-018 Age', function () {
            const age = $(sel.age).isDisplayed();
            expect(age).toEqual(true);
        });
        it('TC-019 Story', function () {
            const story = $(sel.story).isDisplayed();
            expect(story).toEqual(true);
        });
        it('TC-020 Create', function () {
            const create = $(sel.create).isDisplayed();
            expect(create).toEqual(true);
        });
    });
    //describe('Placeholders are correct', function() {...});
})
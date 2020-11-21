const sel = require ('../../data/selectors.json');
const data = require ('../../data/testData.json');
const inputValues4andClick = require ('../../helpers/inputValue4AndClick');
const exp = require ('../../data/expected.json');

describe('Testing all types of story presence', function () {
    describe('Dropdown type presence', function () {
        beforeEach(() => {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
        });
        it('1. Overcoming the Monster', function () {
            $(sel.storyClick).click();
            $$(sel.storyType)[0].click();
            const res = $(sel.storySelectedOption).getText();
            expect(res).toEqual(exp.storyType.Overcoming_the_Monster);
        });
        it('2. Rebirth', function () {
            $(sel.storyClick).click();
            $$(sel.storyType)[1].click();
            const res = $(sel.storySelectedOption).getText();
            expect(res).toEqual(exp.storyType.Rebirth);
        });
        it('3. Quest', function () {
            $(sel.storyClick).click();
            $$(sel.storyType)[2].click();
            const res = $(sel.storySelectedOption).getText();
            expect(res).toEqual(exp.storyType.Quest);
        });
        it('4. Journey and Return', function () {
            $(sel.storyClick).click();
            $$(sel.storyType)[3].click();
            const res = $(sel.storySelectedOption).getText();
            expect(res).toEqual(exp.storyType.Journey_and_Return);
        });
        it('5. Rags and Riches', function () {
            $(sel.storyClick).click();
            $$(sel.storyType)[4].click();
            const res = $(sel.storySelectedOption).getText();
            expect(res).toEqual(exp.storyType.Rags_and_Riches);
        });
        it('6. Tragedy', function () {
            $(sel.storyClick).click();
            $$(sel.storyType)[5].click();
            const res = $(sel.storySelectedOption).getText();
            expect(res).toEqual(exp.storyType.Tragedy);
        });
        it('7. comedy', function () {
            $(sel.storyClick).click();
            $$(sel.storyType)[6].click();
            const res = $(sel.storySelectedOption).getText();
            expect(res).toEqual(exp.storyType.Comedy);
        });
    });
});

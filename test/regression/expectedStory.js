const data = require ('../../data/testStory.json');
const inputValues4andClick = require ('../../helpers/inputValue4AndClick')
const sel = require ('../../data/selectors.json');



describe('User can read the story after submitting choices', function () {

    describe('Story Text', function () {

        it('TC-195-3 Verify that story/s context text is correct for Comedy', function () {
            browser.url('');
            inputValues4andClick(data.name[1], data.gender.it, data.age[1], data.storyType.Comedy);
            let count = 0;
            const comedyContextText = $(sel.story4Name).getText().split(' ');
            for (let el of comedyContextText) {
                if (el.includes(data.name[1]) || el.includes(data.age[1]) || el.includes('It')) {
                    count++
                }
            }
            expect(count === 4).toBe(true);
        });
    });
});


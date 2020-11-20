const sel = require ('../../data/selectors.json');
const data = require ('../../data/testData.json');
const inputValues4andClick = require ('../../helpers/inputValue4AndClick');
const exp = require ('../../data/expected.json');



// describe('Testing all types of story presence', function () {
//     describe('Dropdown type presence', function () {
//
//         beforeEach(() => {
//             browser.url('https://qa-apps.netlify.app/app_my_hero');
//         });
//
//         it('comedy', function () {
//             const typeDropdown = $(sel.storyClick).click();
//             const comedyDropdown = $$(sel.storyType)[6].isDisplayed();
//             expect(comedyDropdown).toEqual(true);
//         });
//     });
// });
// describe('Testing all types of story presence', function () {
//     describe('comedyDropdown', function () {
//         it('comedy', function () {
//             browser.url('https://qa-apps.netlify.app/app_my_hero');
//             const typeDropdown = $(sel.storyClick).click();
//             const comedyDropdown = $$(sel.storyType)[6].isDisplayed();
//             expect(comedyDropdown).toEqual(true);
//         });
//     });
// });
describe('Testing all types of story presence', function () {
    describe('Dropdown type presence', function () {

        beforeEach(() => {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
        });
        it('overcomingTheMonster', function () {
            $('.ant-select-selector').click();
            browser.pause(4000)
            expect($$('.ant-select-item-option-content')[0].selectByVisibleText("Overcoming the Monster")).toEqual("Overcoming the Monster ")

        });
    });

    //     it('overcomingTheMonster', function () {
    //         const typeDropdown = $(sel.storyPlaceHold).click();
    //         const overcomingDropdown = $(sel.storyTypeDropdown).getAttribute('title');
    //         expect(overcomingDropdown).toEqual(data.storyType["Overcoming the Monster"]);
    //     });
    //
    //
    //     xit('comedy', function () {
    //         const typeDropdown = $(sel.storyClick).click();
    //         const comedyDropdown = $$(sel.storyType)[6].isDisplayed();
    //         expect(comedyDropdown).toEqual(true);
    //     });
    // });
});


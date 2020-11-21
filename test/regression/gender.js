const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');
const data = require('../../data/testData.json');
const findGenderInComedyText = require("../../helpers/findGenderInComedyText");
const inputValues4AndClick = require("../../helpers/inputValue4AndClick");

describe('Gender inputs validation', function () {

    before(() => {
        browser.url('https://qa-apps.netlify.app/app_my_hero');
    });

    afterEach(() => {
        $(sel.tryAgain).click();
    });

    it('TC-01 - Gender. HE is displayed as HIS/HE in Comedy story text', function () {
        inputValues4AndClick(data.name, data.gender.he, data.age, data.storyType.Comedy);
        let textGender = findGenderInComedyText();
        expect(textGender).toEqual(exp.genderInComedyTextHE);
    });

    it('TC-02 - Gender. SHE is displayed as HER/SHE in Comedy story text', function () {
        inputValues4AndClick(data.name, data.gender.she, data.age, data.storyType.Comedy);
        let textGender = findGenderInComedyText();
        expect(textGender).toEqual(exp.genderInComedyTextSHE);
    });

    it('TC-03 - Gender. IT is displayed as ITS/IT in Comedy story text', function () {
        inputValues4AndClick(data.name, data.gender.it, data.age, data.storyType.Comedy);
        let textGender = findGenderInComedyText();
        expect(textGender).toEqual(exp.genderInComedyTextIT);
    });

});

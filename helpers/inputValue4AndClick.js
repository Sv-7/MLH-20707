const sel = require ('../data/selectors.json');

function inputValues4AndClick(name, gender, age, storyType){

    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.storyClick).click();
    $$(sel.storyType)[storyType].click();
    $(sel.create).click();
}
module.exports = inputValues4AndClick;
function findGenderInComedyText (name, gender, age, storyType){
    const text = $('.card-text').getText();
    const pattern = /shakes (.*) head [\s\S]* are unequal. (.*) takes [\s\S]* them unequal.[\s\S](.*) continues .*/ ;
    const match = text.match(pattern);
    if (match) {
        return match.slice(1,4);
    }
}

module.exports = findGenderInComedyText;

function findTextName (name, gender, age, storyType){
    const text = $('.card-text').getText();
    const pattern = "<br>" + ".*" + ", who is"
    const start = text.search(pattern) + 1;
    const end = text.search(", who is");

    return text.slice(start, end);
}

module.exports = findTextName;
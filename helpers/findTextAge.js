
function findTextAge (name, gender, age, storyType){
    const text = $('.card-text').getText();
    const pattern = "is" + ".*" + " years old,"
    const start = text.search(pattern) + 3;
    const end = text.search(" years old,");

    return text.slice(start, end);
}

module.exports = findTextAge;

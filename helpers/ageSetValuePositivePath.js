
function ageSetValuePositivePath(selector, data, index) {
    selector.setValue((data)[index]);
    $("p").click();
    const ageRes = selector.getAttribute('value');
    expect(+ageRes).toEqual((data)[index]);
}
module.exports = ageSetValuePositivePath;

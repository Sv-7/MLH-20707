
function ageSetValueNegativePathALERT (selector, data, index){
    selector.setValue((data)[index]);
    browser.pause(500);
    const alert = $('[role = alert]');
    return alert.getText();
}
module.exports = ageSetValueNegativePathALERT;

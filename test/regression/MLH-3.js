describe('My Little Hero: Name Values Checking', function () {

    describe('Getting to the page', function () {

        it('TC-046 Placeholder is correct ', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero'); //open baseUrl

            const inputName = $('.ant-input');
            const namePlaceHolder = inputName.getAttribute('placeholder');
            expect(namePlaceHolder).toEqual('Hero\'s name');
            //browser.pause(4000);
        });

        it('TC-047 Validation if the Name field is enabled to input only letters', function () {
            const inputName = $('.ant-input');
            //inputName.click();

            const isEnabled = inputName.isEnabled();
            expect(isEnabled).toEqual(true);

            inputName.setValue('Anna');
            expect(inputName.getValue()).toEqual('Anna');

            inputName.click();
            browser.keys(['Control', 'a']);
            browser.keys('Delete');
        });

        it('TC-048 Validation if the Name field is enabled to input only digits', function () {
            const inputName = $('.ant-input');

            inputName.setValue('12345678910');
            expect(inputName.getValue()).toEqual('12345678910');

            inputName.click();
            browser.keys(['Control', 'a']);
            browser.keys('Delete');
        });

        it('TC-049 Validation if the Name field is enabled to input only special symbols', function () {
            const inputName = $('.ant-input');

            inputName.setValue('!@#$%^&*()_+=<>?,./:";\'{}[]|\\~`');
            expect(inputName.getValue()).toEqual('!@#$%^&*()_+=<>?,./:";\'{}[]|\\~`');

            inputName.click();
            browser.keys(['Control', 'a']);
            browser.keys('Delete');
        });

        it('TC-050 Validation if the Name field is enabled to input only uppercase letters', function () {
            const inputName = $('.ant-input');

            inputName.setValue('ANNA');
            expect(inputName.getValue()).toEqual('ANNA');

            inputName.click();
            browser.keys(['Control', 'a']);
            browser.keys('Delete');

        });

        it('TC-051 Validation if the Name field is enabled to input only lowercase letters', function () {
            const inputName = $('.ant-input');

            inputName.setValue('anna');
            expect(inputName.getValue()).toEqual('anna');

            inputName.click();
            browser.keys(['Control', 'a']);
            browser.keys('Delete');
        });

        it('TC-052 Validation if the Name field is enabled to input only semicase letters', function () {
            const inputName = $('.ant-input');

            inputName.setValue('AnnA');
            expect(inputName.getValue()).toEqual('AnnA');

            inputName.click();
            browser.keys(['Control', 'a']);
            browser.keys('Delete');
        });

        it('TC-053 Validation if the Name field is enabled to input only camelcase letters', function () {
            const inputName = $('.ant-input');

            inputName.setValue('AnnaMaria');
            expect(inputName.getValue()).toEqual('AnnaMaria');

            inputName.click();
            browser.keys(['Control', 'a']);
            browser.keys('Delete');
        });

        it('TC-054 Validation if the Name field is enabled to input combination of symbols', function () {
            const inputName = $('.ant-input');

            inputName.setValue('Anna123!@#');
            expect(inputName.getValue()).toEqual('Anna123!@#');

            inputName.click();
            browser.keys(['Control', 'a']);
            browser.keys('Delete');
        });

        it('TC-056 Validation if the Name field is enabled to input letters with space', function () {
            const inputName = $('.ant-input');

            inputName.setValue('Anna Maria');
            expect(inputName.getValue()).toEqual('Anna Maria');

            inputName.click();
            browser.keys(['Control', 'a']);
            browser.keys('Delete');
        });

        it('TC-057 Validation if the Name field is enabled to input limited 70 symbols', function () {
            const inputName = $('.ant-input');

            inputName.setValue('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!-_="\',.');
            expect(inputName.getValue()).toEqual('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!-_="\',.');

            inputName.click();
            browser.keys(['Control', 'a']);
            browser.keys('Delete');
        });

        it('TC-058 Validation if the Name field isn\'t enabled to input 71 symbols', function () {
            const inputName = $('.ant-input');

            inputName.setValue('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!-_="\',.?');
            const alert = $('[role = alert]');
            //console.log('ALERT: ' + alert.getText());
            expect(alert.getText()).toEqual('70 symbols max');

            inputName.click();
            browser.keys(['Control', 'a']);
            browser.keys('Delete');
        });

        it('TC-059 Validation if the Name field isn\'t enabled to leave field empty', function () {
            const inputName = $('.ant-input');

            inputName.setValue('');
            const alert = $('[role = alert]');
            expect(alert.getText()).toEqual('Required');

            inputName.click();
            browser.keys(['Control', 'a']);
            browser.keys('Delete');
        });

        it('TC-055 Validation if the Name field isn\'t enabled to input only spaces', function () {
            const inputName = $('.ant-input');

            inputName.setValue('   ');
            expect(inputName.getValue()).toEqual('');

            inputName.doubleClick();
            browser.keys(['Control', 'a']);
            browser.keys('Delete');
        });
    });

});
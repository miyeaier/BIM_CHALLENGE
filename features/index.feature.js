const { expect } =require('chai');
const BrowserHelpers = require('e2e_training_wheels')
const browser = new BrowserHelpers()

describe('User can calculate BMI with the metric units', () => {
    before(async () => {
        await browser.init()
        await browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await browser.page.reload();
    });

    after(async () => {
        await browser.close();
    });

    it('by inputing his weight and height', async () => {

        await browser.fillIn("input[id='weight-in-lbs']", { with: "95" })
        await browser.fillIn("input[id='height-in-in']", { with: "185" })

        await browser.clickOnButton("button")
        let content = await browser.getContent("span[id='display_value']")
        expect(content).to.eql('Your BMI is 27.76');
    });
});
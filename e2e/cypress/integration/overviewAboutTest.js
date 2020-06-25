import { PageObject } from "../pageObject/pageObject"

describe('Testing about overview contract', () => {
    const page = new PageObject();

    beforeEach('direct to our local server', () => {
        page.navigate();
    })

    it('check for overview content', () => {
        page.checkAboutOverview(2);

        page.checkAboutOverview(3);
        
        page.checkAboutOverview(4);
    })
})
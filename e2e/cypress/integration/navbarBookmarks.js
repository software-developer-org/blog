import { PageObject } from "../pageObject/pageObject"

describe('Testing bookmark navbar contract', () => {
    const page = new PageObject();
    beforeEach('direct to our local server', () => {
        page.navigate();
    })

    it('check for navbar content', () => {
        page.checkNavbarBookmark(2);

        page.checkNavbarBookmark(3);

        page.checkNavbarBookmark(4);
    })
})
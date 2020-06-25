import { PageObject } from "../pageObject/pageObject"

describe('Testing blog header contract', () => {
    const page = new PageObject();

    beforeEach('direct to our local server', () => {
        page.navigate();
    })

    it('check for header content', () => {
  
        page.checkHeaderButtons("Blog")

        page.checkHeaderButtons("About")

        page.checkHeaderButtons("Bookmark")

    })

    it('check back button function', () => {
        page.checkBackButton();
    })

});
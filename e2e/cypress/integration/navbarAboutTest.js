import { PageObject } from '../pageObject/pageObject';

describe('Testing about navbar contract', () => {
  const page = new PageObject();
  beforeEach('direct to our local server', () => {
    page.navigate();
  });

  it('check for navbar content', () => {
    page.checkNavbarAbout(2);

    page.checkNavbarAbout(3);

    page.checkNavbarAbout(4);
  });
});

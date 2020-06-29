import { PageObject } from '../pageObject/pageObject';

describe('Testing bookmark overview contract', () => {
  const page = new PageObject();

  beforeEach('direct to our local server', () => {
    page.navigate();
  });

  it('check for overview content', () => {
    page.checkBookmarkOverview(2);

    page.checkBookmarkOverview(3);

    page.checkBookmarkOverview(4);
  });
});

import { PageObject } from '../pageObject/pageObject';

describe('Testing blog overview contract', () => {
  const page = new PageObject();
  beforeEach('direct to our local server', () => {
    page.navigate();
  });

  it('check for overview content', () => {
    page.checkBlogOverview(2);

    page.checkBlogOverview(3);

    page.checkBlogOverview(4);
  });
});

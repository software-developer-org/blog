import { PageObject } from '../pageObject/pageObject'

describe('Testing blog navbar contract', () => {
  const page = new PageObject()
  beforeEach('direct to our local server', () => {
    page.navigate()
  })

  it('check for navbar content', () => {
    page.checkNavbarBlogs(2)

    page.checkNavbarBlogs(3)

    page.checkNavbarBlogs(4)
  })
})

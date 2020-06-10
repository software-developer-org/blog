# Test Pyramid

**For a software project to succeed you need a successful strategy to testing**

The test pyramid is a form of testing your software on differnet levels.
It layers the testing to smaler parts of your projekt to simplify the process an makes it overall faster.


The test layers look like this:

- 1. At the bottom are Unit Tests. These count for the majority of tests you have for your codebase. 
This tests the smallest unit of code possible, only test a single method each. This builds the foundation for further testing.

- 2. Middle level consists of Integration Tests which are tests designed to verify the integration of different parts of separate components of a software system together. 
This can be integration with a Database, with a Framework, with third party external software systems, or an API.

For example testing the getBlog() function in our project with the coresponding API call would be such an Integration test.


- 3. At the top is the end-to-end tests which are tests that verifies the end to end workflows of your codebase. 
They tests the system from the user-action entry point right to the end of the system down to the database level. However, these are typically black-box tests that are mostly performed manually.


Test coverage:

You should Unit test all your functions and together with the Integration tests this makes 80% of your total test coverage.
The 20%	left is end to end testing that is still requiert to make shure your projekt works as intended.


# References

- [short article by Martin Fowler](https://martinfowler.com/bliki/TestPyramid.html)

- [detailed explanation](https://medium.com/@Colin_But/define-testing-strategy-using-the-testing-pyramid-1dabee37e823)

- [integration testing wikipedia](https://en.wikipedia.org/wiki/Integration_testing)
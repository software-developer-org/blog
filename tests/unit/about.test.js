/**
 * @jest-environment jsdom
 */

/* -- exaple of mock logic --
    const result = objToBeTested.test();
    objToBeTested.subcall = jest.fn();
    objToBeTested.subcall.mockImplementation(() => false);
    expect(result).toBeFalsy();
    */

// import the neccessary functions
import * as Contract from '../../public/javascripts/contract';
import { aboutTeamMemberName } from '../../public/javascripts/about';

describe('Unit test about', () => {
  test('aboutTeamMemberName() processed array data', () => {
    const spy = jest.spyOn(Contract, 'fullTeam');
    aboutTeamMemberName();
    expect(spy).toBeCalledTimes(1);
  });
});

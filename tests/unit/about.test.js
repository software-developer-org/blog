/**
 * @jest-environment jsdom
 */

// import the neccessary functions
require('jest-fetch-mock').enableMocks();
import { aboutTeamMemberName } from '../../public/javascripts/about';
import { fullTeam } from '../../public/javascripts/contract';

// create mock for fullTeam()

// test blogTitles()
test('aboutTeamMemberName() processed array data', () => {
  aboutTeamMemberName();
  expect(fullTeam).toHaveBeenCalled();
});

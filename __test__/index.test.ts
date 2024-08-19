import { jest, test, expect } from '@jest/globals';
import run from '../src/index';

global.console.log = jest.fn();

test('parses the input file and logs to the console', () => {
  const args = ['', '', '../../example-data/survey.csv'];

  run(args);

  expect(global.console.log).toHaveBeenCalledWith(`
    Participation

    Participants: 6
    Submitted: 5 (83.3%)

    I like the kind of work I do. 4.6
    In general, I have the resources (e.g., business tools, information, facilities, IT or functional support) I need to be effective. 5.0
    We are working at the right pace to meet our goals. 5.0
    I feel empowered to get the work done for which I am responsible. 3.6
    I am appropriately involved in decisions that affect my work. 3.6
  `);
});

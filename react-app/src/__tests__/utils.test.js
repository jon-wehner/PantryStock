import { getDaysToExpire, getTimeStamp } from '../services/utils';

describe('getTimeStamp Function', () => {
  test('Given a date string, returns correct string in zulu time', () => {
    const testString = '2022-06-16T00:00:00+07:00';
    const adjustedString = '2022-06-16T07:00:00.000Z';
    expect(getTimeStamp(testString)).toEqual(adjustedString);
  });
});

// describe('the days to expire function', () => {
//   test('given a date string it returns the correct days to expire', () => {
//     const daysToExpire = getDaysToExpire('2022-06-15 07:00:00');
//   });
// });

// iso strings come out of DB zulu time where hours is tz offset
// browser will correctly convert them into midnight in user tz
//

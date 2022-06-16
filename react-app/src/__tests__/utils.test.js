import { getDaysToExpire, getTimeStamp } from '../services/utils';

describe('getTimeStamp Function', () => {
  test('Given a date string, returns correct string in zulu time', () => {
    const testString = '2022-06-16';
    const adjString = '2022-06-16T07:00:00.000Z';
    expect(getTimeStamp(testString)).toEqual(adjString);
  });
});

describe('the days to expire function', () => {
  test('given a date string it returns the correct days to expire', () => {
    const twoDaysFromNow = new Date();
    twoDaysFromNow.setDate(twoDaysFromNow.getDate() + 2);
    const isoDate = new Date(twoDaysFromNow).toISOString();
    const daysToExpiration = getDaysToExpire(new Date(isoDate));
    expect(daysToExpiration).toEqual(2);
  });
});

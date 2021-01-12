import moment from 'moment-timezone';

export default (date?: string | string[] | number[]) =>
  moment.tz(date, 'Asia/Tokyo');

import { DateTime } from 'luxon';

const ordinal = (day) => {
  if (day > 3 && day < 21) {
    return 'th';
  }

  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

const dateForFeed = (date) => {
  return date.toISOString();
};
const isOldPost = (date) => {
  const dt = DateTime.fromISO(date.toISOString()).setZone('America/Chicago');
  return DateTime.now().diff(dt, 'years').years > 4;
};
const diffInYears = (date) => {
  const dt = DateTime.fromISO(date.toISOString()).setZone('America/Chicago');
  return Math.floor(DateTime.now().diff(dt, 'years').years);
};
const toDateTime = (date) => {
  return DateTime.fromISO(date.toISOString()).toFormat('yyyy-MM-dd HH:mm:ss');
};
const toDateTimeNoSeconds = (date) => {
  return DateTime.fromISO(date.toISOString()).toFormat('yyyy-MM-dd HH:mm');
};
const isoDateOnlyForDiscussion = (date) => {
  return DateTime.fromISO(date.toISOString())
    .setZone('America/Chicago')
    .toFormat('yyyy-MM-dd');
};
const isoDateOnly = (date) => {
  return DateTime.fromISO(date)
    .setZone('America/Chicago')
    .toFormat('yyyy-MM-dd');
};
const postDate = (date) => {
  const dt = DateTime.fromISO(date.toISOString()).setZone('America/Chicago');
  return `${dt.toFormat(`d`)}${ordinal(dt.day)} ${dt.toFormat(`LLLL yyyy`)}`;
};
const postTime = (date) => {
  return DateTime.fromISO(date.toISOString())
    .setZone('America/Chicago')
    .toFormat('HH:mm');
};
const postDateNoYear = (date) => {
  const dt = DateTime.fromISO(date.toISOString()).setZone('America/Chicago');
  return `${dt.toFormat(`MMMM d`)}${ordinal(dt.day)}`;
};

export default {
  dateForFeed,
  isOldPost,
  diffInYears,
  toDateTime,
  toDateTimeNoSeconds,
  isoDateOnlyForDiscussion,
  isoDateOnly,
  postDate,
  postTime,
  postDateNoYear,
};

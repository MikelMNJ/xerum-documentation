import moment from 'moment';
import { timeframeValid } from 'helpers/validators';

const format = "ll hh:mm:ss";

export const counter = args => {
  const { timeframe, aggregate, local, endDate } = args
  const agg = aggregate || 1;
  const now = moment().utc();
  const prev = moment(now).startOf(parentTime());
  const next = moment(prev).add(1, parentTime());
  const units = next.diff(prev, timeframe);
  const totalTimes = units / agg;
  const times = [];
  let mostRecent;
  let count = "00:00:00";

  // Establish broader range to break-down time brackets.
  function parentTime() {
    switch(timeframe) {
      case "seconds":
        return "minute";
      case "minutes":
        return "hour";
      case "hours":
        return "day";
      case "days":
        return "week";
      case "weeks":
        return "month";
      case "months":
        return "year";

      default:
        return "hour";
    }
  };

  // Establish start/end times for time brackets using timeframe and aggregation.
  for (let i = 0; i < totalTimes; i++) {
    const workingTime = moment(prev).add(i * agg, timeframe);
    times.push(workingTime);
  }

  // Find time bracket we are currently in.
  times.find((val, index) => {
    if (now >= val && (index === times.length - 1)) {
      // Last time period in array.
      mostRecent = times[times.length - 1];
      return times[times.length - 1];
    } else if (now < val && (index !== 0 || index !== times.length - 1)) {
      // First and every time period in between.
      mostRecent = times[index - 1];
      return times[index - 1];
    }
  });

  const end = mostRecent && moment(mostRecent).add(agg, timeframeValid(timeframe) || "hours");

  if (endDate) {
    count = "Fixed end time...";
  } else if (timeframe) {
    count = `${end.diff(now, timeframe)} ${timeframe}`;

    // console.log(`
    //   Timeframe: ${agg} ${timeframe}
    //   Units: ${units} ${timeframe}/${parentTime()} (${totalTimes} total)
    //   Range: ${prev.format(format)} - ${next.format(format)}

    //   Start: ${mostRecent?.format(format)}
    //   Now: ${now.format(format)}
    //   End: ${end?.format(format)}
    // `);
  }

  return count;
};
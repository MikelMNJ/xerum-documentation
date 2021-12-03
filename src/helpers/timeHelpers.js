import moment from 'moment';
import { timeframeValid } from 'helpers/validators';

export const counter = args => {
  const { timeframe, local, endDate } = args
  const aggregate = args.aggregate || 1;
  const now = moment().utc();
  const prev = moment(now).startOf(parentTime());
  const next = moment(prev).add(1, parentTime());
  const units = next.diff(prev, timeframe);
  const totalTimes = units / aggregate;
  const times = [];
  let count = "00:00:00";

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

  for (let i = 0; i < totalTimes; i++) {
    const workingTime = moment(prev).add(i * aggregate, timeframe);
    times.push(workingTime);
  }

  const diffArr = times.map(time => time.diff(now, timeframe));
  console.log(diffArr)

  // if 0 is present, use 0 -- otherwise use negative number's index just before first positive in array.
  // TODO: Fix break on hour change (array ends) and break on time range end.
  const index = diffArr.findIndex((val, index) => val <= 0 && diffArr[index + 1] > 0);
  const mostRecent = times[index]
  const end = moment(mostRecent).add(aggregate, timeframeValid(timeframe) || "hours");

  console.log(`
    Timeframe: ${aggregate} ${timeframe}
    Units: ${units} ${timeframe}/${parentTime()} (${totalTimes} total)
    Range: ${prev.format("lll")} - ${next.format("lll")}

    Start: ${mostRecent?.format("lll")}
    Now: ${now.format("lll")}
    End: ${end.format("lll")}
  `);

  if (endDate) {
    count = "Fixed end time...";
  } else if (timeframe) {
    count = "Calculating time left...";
  }

  return count;
};
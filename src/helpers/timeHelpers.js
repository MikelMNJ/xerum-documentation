import moment from 'moment';

// if seconds, use start of minute
// if minutes, use start of hour
// if hours, use start of day
// if day, use start of week
// if week, use start of month
// if months, use start of year

export const counter = args => {
  const { timeframe, local, endDate } = args
  const aggregate = args.aggregate || 1;
  const now = moment().utc();
  const start = moment(now).startOf(parentTime());
  const end = moment(start).add(aggregate, timeframe || "hours");
  let count = "00:00:00";

  function parentTime () {
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

  console.log(`
    Timeframe: ${timeframe}
    Aggregate: ${aggregate}
    Parent Time: ${parentTime()}

    Start: ${start.format("LLL")}
    Now: ${now.format("LLL")}
    End: ${end.format("LLL")}
  `);

  if (endDate) {
    count = "Fixed end time...";
  } else if (timeframe) {
    count = "Calculating time left...";
  }

  return count;
};
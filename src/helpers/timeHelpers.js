import React, { Fragment } from 'react';
import moment from 'moment';
import { timeframeValid } from 'helpers/validators';
import { startCase } from 'lodash';

const format = "ddd, l, hh:mm:ss A";

export const counter = args => {
  const { timeframe: frame, aggregate, local, end: endDate, details } = args
  const timeframe = frame || "hours";
  const agg = aggregate || 1;
  const now = local ? moment() : moment().utc();
  const prev = moment(now).startOf(parentTime());
  const next = moment(prev).add(1, parentTime());
  const units = next.diff(prev, timeframe);
  const totalTimes = units / agg;
  const times = [];
  let mostRecent;
  let aggCount;
  let count = { remaining: "00:00:00" };

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
        return "day";
    }
  };

  // Establish start/end times for time brackets using timeframe and aggregation.
  for (let i = 0; i < totalTimes; i++) {
    const workingTime = moment(prev).add(i * agg, timeframe);
    times.push(workingTime);
  }

  // Find time bracket we are currently in.
  times.find((val, index) => {
    aggCount = index;

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
    count.remaining = "Fixed end time...";
  } else if (timeframe) {
    count.remaining = `${end.diff(now, timeframe)} ${timeframe} remaining`;

    if (details) {
      count.details =
        <Fragment>
          <h4>Overview</h4>
          <div className="group">
            <p><strong>Timeframe</strong>: {startCase(timeframe)} ({units} {timeframe}/{parentTime()})</p>
            <p><strong>Aggregate</strong>: Every {agg} {timeframe} ({totalTimes} total)</p>
            <p><strong>From</strong>: {prev.format(format)}</p>
            <p><strong>To</strong>: {next.format(format)}</p>
            <p><strong>Local</strong>: {local ? "true" : "false"}</p>
          </div>

          <h4>Aggregate Range ({aggCount}/{totalTimes})</h4>
          <div className="group">
            <p><strong>Start</strong>: {mostRecent?.format(format)}</p>
            <p><strong>Now</strong>: {now.format(format)}</p>
            <p><strong>End</strong>: {end?.format(format)}</p>
          </div>
        </Fragment>;
    }
  }

  return count;
};
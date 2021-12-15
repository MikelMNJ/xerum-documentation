import React, { Fragment } from 'react';
import moment from 'moment';
import { timeframeValid } from 'helpers/validators';
import { startCase } from 'lodash';

const validTimes = [ "seconds", "minutes", "hours", "days", "weeks", "months", "years" ];
const format = "ddd, l, hh:mm:ss A";
const formatNum = (val, digits) => (
  val.toLocaleString('en-US', { minimumIntegerDigits: digits || 2 })
);

export const aggTime = args => {
  // TODO: Implement callback function.
  const {
    timeframe: frame,
    aggregate,
    local,
    details,
    vague,
    compact,
    callback
  } = args;

  const timeframe = frame || "hours";
  const agg = aggregate || 1;
  const now = local ? moment() : moment().utc();
  const prev = moment(now).startOf(parentTime());
  const next = moment(prev).add(1, parentTime());
  const units = next?.diff(prev, timeframe);
  const totalTimes = (units / agg) | 0;
  const times = [];
  let mostRecent;
  let aggCount;
  let count = {};

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

  function childTime(offset) {
    const index = validTimes.findIndex(time => time === timeframe);
    let time = timeframe;

    if (index !== -1 && index + offset >= 0 && index + offset <= validTimes.length) {
      time = validTimes[index + (offset || 0)];
    }

    switch (time) {
      case "years":
        return "months";
      case "months":
        return "weeks";
      case "weeks":
        return "days";
      case "days":
        return "hours";
      case "hours":
        return "minutes";
      case "minutes":
        return "seconds";
      case "seconds":
        return "milliseconds";

      default:
        return "minutes";
    }
  };

  function abbreviatedTime(time) {
    switch(time) {
      case "milliseconds":
        return "ms";
      case "seconds":
        return "s";
      case "minutes":
        return "m";
      case "hours":
        return "h";
      case "days":
        return "D";
      case "weeks":
        return "W";
      case "months":
        return "M";
      case "years":
        return "Y";

      default:
        return "h";
    }
  };

  function fixedUnits(offset) {
    const monthStart = moment(now).startOf("month");
    const monthEnd = moment(now).endOf("month");
    const weeksInMonth = monthEnd?.diff(monthStart, "weeks", true);
    const index = validTimes.findIndex(time => time === timeframe);
    let time = timeframe;

    if (index !== -1
      && index + offset >= 0
      && index + offset <= validTimes.length
    ) {
      time = validTimes[index + (offset || 0)];
    }

    switch(time) {
      case "seconds":
        return 1000;
      case "minutes" || "hours":
        return 60;
      case "days":
        return 24;
      case "weeks":
        return 7;
      case "months":
        return weeksInMonth;
      case "years":
        return 12;

      default:
        return 60;
    }
  };

  const remainingTime = () => {
    const firstTime = end?.diff(now, timeframe, true);
    const firstIsolated = firstTime - Math.floor(firstTime);
    const secondTime = fixedUnits() * firstIsolated;
    const secondIsolated = secondTime - Math.floor(secondTime);
    const thirdTime = fixedUnits(-1) * secondIsolated;
    const thirdIsolated = thirdTime - Math.floor(thirdTime);

    // TODO: Combine up childTime() and fixedUnits().
    // TODO: Clean all this up and call results from one function.
    const extraTime1 = fixedUnits(-2) * thirdIsolated;
    const extraTime1Isolated = extraTime1 - Math.floor(extraTime1);
    const extraTime2 = fixedUnits(-3) * extraTime1Isolated;
    const extraTime2Isolated = extraTime2 - Math.floor(extraTime2);
    const extraTime3 = fixedUnits(-4) * extraTime2Isolated;

    // TODO: Clean up compact tertiary statements.
    const first = (compact ? formatNum(end?.diff(now, timeframe)) : end?.diff(now, timeframe)) + (!compact ? abbreviatedTime(timeframe) : "");
    const second = timeframe !== ("seconds") && (compact ? formatNum(secondTime | 0) : secondTime | 0) + (!compact ? abbreviatedTime(childTime()) : "");
    const third = timeframe !== ("minutes") && (compact ? formatNum(thirdTime | 0) : thirdTime | 0) + (!compact ? abbreviatedTime(childTime(-1)) : "");
    const fourth = timeframe !== ("hours") && (compact ? formatNum(extraTime1 | 0) : extraTime1 | 0) + (!compact ? abbreviatedTime(childTime(-2)) : "");
    const fifth = timeframe !== ("days") && (compact ? formatNum(extraTime2 | 0) : extraTime2 | 0) + (!compact ? abbreviatedTime(childTime(-3)) : "");
    const sixth = timeframe !== ("weeks") && (compact ? formatNum(extraTime3 | 0) : extraTime3 | 0) + (!compact ? abbreviatedTime(childTime(-4)) : "");

    const time = () => {
      // TODO: Make formatting a single function, including space additions.
      const space = compact ? ":" : " ";

      if (!second) return `${first}`;
      if (!third) return `${first}${space}${second}`;

      if (vague) {
        return `${first}${space}${second}${space}${third}`;
      }

      if (!fourth) return `${first}${space}${second}${space}${third}`;
      if (!fifth) return `${first}${space}${second}${space}${third}${space}${fourth}`;
      if (!sixth) return `${first}${space}${second}${space}${third}${space}${fourth}${space}${fifth}`;

      return `${first}${space}${second}${space}${third}${space}${fourth}${space}${fifth}${space}${sixth}`;
    };

    return time();
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
      aggCount = index + 1;
      return times[times.length - 1];
    } else if (now < val && (index !== 0 || index !== times.length - 1)) {
      // First and every time period in between.
      mostRecent = times[index - 1];
      aggCount = index;
      return times[index - 1];
    }
  });

  const end = mostRecent && moment(mostRecent).add(agg, timeframeValid(timeframe) || "hours");

  if (timeframe) {
    count.remaining = remainingTime();

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
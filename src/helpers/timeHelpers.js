import React, { Fragment } from 'react';
import moment from 'moment';
import { timeframeValid } from 'helpers/validators';
import { startCase } from 'lodash';
import { formatNum } from 'helpers/utilityHelpers';

const validTimes = [ "seconds", "minutes", "hours", "days", "weeks", "months", "years" ];
const format = "ddd, l, hh:mm:ss A";

export const aggTime = args => {
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

  const remainingTime = () => {
    // TODO: Iterate and store all of these in an array.
    const firstTime = end?.diff(now, timeframe);
    const firstTimeFloat = end?.diff(now, timeframe, true);
    const secondTime = fixedUnits() * isolate(firstTimeFloat);
    const thirdTime = fixedUnits(-1) * isolate(secondTime);
    const extraTime1 = fixedUnits(-2) * isolate(thirdTime);
    const extraTime2 = fixedUnits(-3) * isolate(extraTime1);
    const extraTime3 = fixedUnits(-4) * isolate(extraTime2);

    const first = unit(firstTime, null, true);
    const second = timeframe !== ("seconds") && unit(secondTime);
    const third = timeframe !== ("minutes") && unit(thirdTime, -1);
    const fourth = timeframe !== ("hours") && unit(extraTime1, -2);
    const fifth = timeframe !== ("days") && unit(extraTime2, -3);
    const sixth = timeframe !== ("weeks") && unit(extraTime3, -4);

    function fixedUnits(offset, child) {
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
          return child ? "milliseconds" : 1000;
        case "minutes":
          return child ? "seconds" : 60;
        case "hours":
          return child ? "minutes" : 60;
        case "days":
          return child ? "hours" :  24;
        case "weeks":
          return child ? "days" : 7;
        case "months":
          return child ? "weeks" : weeksInMonth;
        case "years":
          return child ? "months" : 12;

        default:
          return child ? "minutes" : 60;
      }
    };

    function unit (val, offset, useTimeframe) {
      const time = val | 0;
      const unit = abbreviatedTime(useTimeframe ? timeframe : fixedUnits(offset, true));

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

      if (compact) return formatNum(time);

      return time + unit;
    };

    function isolate(val) {
      const isolated = val - Math.floor(val);
      return isolated;
    };

    const time = () => {
      // TODO: format by joining values from array.
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

  if (timeframe) {
    const newRange = now.diff(mostRecent, "seconds") === 0;
    count.remaining = remainingTime();

    if (newRange && callback) callback();

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
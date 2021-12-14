import React, { Fragment } from 'react';
import moment from 'moment';
import { timeframeValid } from 'helpers/validators';
import { startCase } from 'lodash';

const format = "ddd, l, hh:mm:ss A";

export const counter = args => {
  const { timeframe: frame, aggregate, local, end: endDate, details, callback } = args
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

  function childTime(micro) {
    // Default requests units for the middle time: 00:xx:00
    // Micro requests units for the smallest time 00:00:xx

    switch (timeframe) {
      case "years":
        return micro ? "weeks" : "months";
      case "months":
        return micro ? "days" : "weeks";
      case "weeks":
        return micro ? "hours" : "days";
      case "days":
        return micro ? "minutes" : "hours";
      case "hours":
        return micro ? "seconds" : "minutes";
      case "minutes":
        return micro ? "milliseconds" : "seconds";
      case "seconds":
        return "milliseconds";

      default:
        return micro ? "seconds" : "minutes";
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
  }

  function fixedUnits(micro) {
    // Default requests units for the middle time: 00:xx:00
    // Micro requests units for the smallest time 00:00:xx

    switch(timeframe) {
      case "seconds":
        return 1000;
      case "minutes":
        return micro ? 1000 : 60;
      case "hours":
        return 60; // micro and standard the same: 60s/m vs 60m/hr
      case "days":
        return micro ? 60 : 24;
      case "weeks":
        return micro ? 24 : 7;
      case "months":
        return micro ? 7 : 4.34524; // TODO: Check the accuracy of this value.
      case "years":
        return micro ? 4.34524 : 12;

      default:
        return 60;
    }
  }

  const remainingTime = () => {
    const floatTime = end?.diff(now, timeframe, true);
    const floatIsolated = floatTime - Math.floor(floatTime);
    const subTime = fixedUnits() * floatIsolated;
    const subIsolated = subTime - Math.floor(subTime);
    const microTime = fixedUnits(true) * subIsolated;
    const first = end?.diff(now, timeframe) + abbreviatedTime(timeframe);
    const second = timeframe !== ("seconds") && (subTime | 0) + abbreviatedTime(childTime());
    const third = timeframe !== ("minutes") && (microTime | 0) + abbreviatedTime(childTime(true));

    const time = () => {
      if (!second) return `${first}`;
      if (!third) return `${first} ${second}`;

      return `${first} ${second} ${third}`;
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

  if (endDate) {
    count.remaining = "Fixed end time...";
  } else if (timeframe) {
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
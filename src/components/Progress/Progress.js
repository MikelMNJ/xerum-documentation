import React, { Fragment, useRef, useEffect, useState } from 'react';
import { hexValid } from 'helpers/validators';
import { addEvent, removeEvent } from 'helpers/utilityHelpers';
import Percent from 'components/Percent/Percent';
import colors from 'theme/colors.scss';
import './Progress.scss';

const Progress = props => {
  const {
    color,
    bgColor,
    pctColor,
    noPct,
    fixedPct,
    current,
    total,
    className,
    styles,
    ...rest
  } = props;

  const [ pctStyle, setPctStyle ] = useState({
    color: hexValid(pctColor) || "#00000080"
  });

  const progress = +(current) / +(total) * 100;
  const validColor = hexValid(color) ? color : colors.blue;
  const validBGColor = hexValid(bgColor) ? bgColor : colors.slate;
  const widthRef = useRef();
  const barWidth = widthRef.current?.offsetWidth;
  const pctRef = useRef();
  const pctWidth = pctRef.current?.offsetWidth;
  const barStyle = { backgroundColor: validBGColor, ...styles };
  const progressStyle = {
    ...styles,
    width: `calc(100% * ${progress / 100})`,
    backgroundColor: validColor,
  };

  const pctBarPos = e => {
    const posX = barWidth >= pctWidth + 4 ? barWidth - pctWidth - 4 : 0;

    setPctStyle({
      ...pctStyle,
      transform: `translateX(${fixedPct ? 0 : posX}px)`,
    });
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(pctBarPos);
    const elements = [ widthRef.current, pctRef.current ];
    elements.forEach(element => resizeObserver.observe(element));
  }, [barWidth, pctWidth]);


  const buildClasses = () => {
    let classList = "progressBar";

    if (className) classList += ` ${className}`;
    if (noPct) classList += ` noPct`;

    return classList;
  };

  return (
    <Fragment>
      <div className={buildClasses()} style={barStyle} {...rest}>
        <div ref={widthRef} className="progress" style={progressStyle}>
          {!noPct && (
            <div ref={pctRef}>
              <Percent
                className="pct"
                current={current}
                total={total}
                style={pctStyle}
              />
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Progress;
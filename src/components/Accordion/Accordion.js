import React, { useState, useEffect, createRef, useRef } from 'react';
import { buildClasses } from 'helpers/utilityHelpers';
import { iconValid, hexValid } from 'helpers/validators';
import { isEqual } from 'lodash';
import { expand, collapse } from './animations';
import gsap from 'gsap';
import './Accordion.scss';

const Accordion = props => {
  const { sections, openDefault, openIcon, closeIcon, noIcon, className, callback, ...rest } = props;
  const [ active, setActive ] = useState(openDefault || null);
  const [ refsReady, setRefsReady ] = useState(false);
  const duration = 0.1;
  const classes = [
    { condition: className, name: className },
  ];

  const refs = useRef(sections?.map(section => createRef()));

  useEffect(() => {
    const index = sections.indexOf(active);

    if (!refsReady) return setRefsReady(true);
    if (index !== -1 && openDefault) {
      const ref = refs.current[index];
      expand(ref, duration);
    }
  }, [refsReady, setRefsReady, openDefault, active, sections]);

  const expandCollapse = args => {
    const { isActive, section, index } = args;
    const ref = refs.current[index];

    if (!isActive) {
      const lastIndex = sections.indexOf(active);
      const hasPrev = lastIndex !== -1;

      // Collapse last opened section.
      if (hasPrev) {
        const lastRef = refs.current[lastIndex];
        collapse(ref, duration, setActive, callback, lastRef, section)
      }

      // Open new section.
      if (callback) callback(section);
      gsap.delayedCall(hasPrev ? duration : 0, () => expand(ref, duration));
      return gsap.delayedCall(hasPrev ? duration : 0, () => setActive(section));
    }

    collapse(ref, duration, setActive, callback);
  };

  const buildAccordion = () => {
    if (refsReady) {
      return sections?.map((section, index) => {
        const { title, content, color } = section;
        const ref = refs.current[index];
        const isActive = isEqual(section, active);
        const args = { isActive, section, index };
        const activeStyle = {
          backgroundColor: isActive && hexValid(color),
        };

        return (
          <div ref={ref} key={index} className="section" style={activeStyle}>
            <h3
              className={`title ${isActive ? "active" : ""}`}
              onClick={() => expandCollapse(args)}
            >
              {!noIcon && (
                <i className={isEqual(active, section)
                  ? iconValid(openIcon) || "fa-solid fa-minus"
                  : iconValid(closeIcon) || "fa-solid fa-plus"
                } />
              )}&nbsp;

              {title}
            </h3>

            {isActive && (
              <div className="content">
                {content}
              </div>
            )}
          </div>
        );
      });
    }
  };

  return (
    <div className={buildClasses(classes, "accordion")} {...rest}>
      {buildAccordion()}
    </div>
  );
};

export default Accordion;
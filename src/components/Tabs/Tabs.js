import React, { useState, useEffect, useRef } from 'react';
import { hexValid } from 'helpers/validators';
import colors from 'theme/colors.scss';
import './Tabs.scss';

const buffer = 0.5;
const margin = buffer / 2;

const Tabs = props => {
  const {
    content,
    activeColor,
    inactiveColor,
    separatorColor,
    className,
    ...rest
  } = props;

  const [ activeTab, setActiveTab ] = useState(content?.[0]?.name);
  const [ sliderStyle, setSliderStyle ] = useState({
    width: `calc(100% / ${content.length} - ${buffer}rem)`,
    transform: `translateX(${calcX() || margin}rem)`
  });

  const slider = useRef();
  const tabContainer = useRef();

  useEffect(() => {
    if (slider.current && tabContainer.current) {
      const resizeObserver = new ResizeObserver(calcX);
      resizeObserver.observe(slider.current)
    }
  }, [activeTab]);

  function calcX() {
    if (slider?.current && tabContainer?.current) {
      const index = content.findIndex(tab => activeTab === tab.name);
      const sliderWidth = slider.current.clientWidth / 16;
      const posX = sliderWidth * index;
      const posXMargin = buffer * index;
      const updatedPosX = posX + posXMargin + margin;
      const newStyle = {
        ...sliderStyle,
        transform: `translateX(${index === -1 ? margin : updatedPosX}rem)`
      };

      setSliderStyle(newStyle);
    }
  };

  const tabStyle = tabName => ({
    backgroundColor: activeTab === tabName
      ? hexValid(activeColor)
      : hexValid(inactiveColor),
    borderRight: separatorColor && `0.0625rem solid ${separatorColor}`,
  });

  const buildClasses = tabName => {
    let classList = "name";
    if (activeTab === tabName) classList += " active";
    return classList;
  };

  const buildTabs = () => (
    <div>
      <div className="tabNames">
        {content?.map((tab, index) => {
          return (
            <div
              key={index}
              className={buildClasses(tab.name ?? "")}
              style={tabStyle(tab.name)}
              onClick={() => {
                if (activeTab !== tab.name) setActiveTab(tab.name);
              }}
            >
              {tab.name}
            </div>
          );
        })}
      </div>

      <div ref={slider} className="tabSlider" style={sliderStyle} />
    </div>
  );

  const buildContent = () => (
    <div ref={tabContainer} className="tabContent">
      {content?.map((tab, index) => {
        if (tab && activeTab === tab.name) {
          return (
            <div key={index} className="content">
              {tab.content}
            </div>
          );
        }
      })}
    </div>
  )

  return (
    <div className={`tabContainer ${className}`} {...rest}>
      {buildTabs()}
      {buildContent()}
    </div>
  );
};

export default Tabs;
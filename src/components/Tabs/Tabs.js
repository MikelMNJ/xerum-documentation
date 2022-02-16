import React, { useState } from 'react';
import { hexValid } from 'helpers/validators';
import colors from 'theme/colors.scss';
import './Tabs.scss';

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
    <div className="tabNames">
      {content?.map((tab, index) => (
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
      ))}
    </div>
  );

  const buildContent = () => (
    <div className="tabContent">
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
import React from 'react';
import { urlValid } from 'helpers/validators';
import { trimText } from 'helpers/utilityHelpers';
import './Card.scss';

const Card = props => {
  const {
    image,
    title,
    text,
    limit,
    footer,
    url,
    vertical,
    titleColor,
    className,
    ...rest
  } = props;

  const imgStyle = { backgroundImage: `url("${urlValid(image)}")` };
  const titleStyle = { color: titleColor };

  const handleClick = e => {
    const validUrl = urlValid(url);
    if (validUrl) window.open(validUrl, rest.target || "_blank");
  };

  const buildClasses = () => {
    let classList = "cardContainer";
    if (className) classList += ` ${className}`;
    if (vertical) classList += " vertical";
    return classList;
  };

  const isolated = condition => condition ? "noVertical" : "";

  return (
    <div className={buildClasses()} {...rest}>
      {image && (
        <div
          className={`image ${isolated(!footer && !vertical)}`}
          style={imgStyle}
          onClick={handleClick}
        />
      )}

      {(text || title) && (
        <div className="text">
          {title && (
            <p className="title" style={titleStyle} onClick={handleClick}>
              {title}
            </p>
          )}

          {text && (
            <p>
              {trimText(text, limit)}{limit && "..."}
            </p>
          )}
        </div>
      )}

      {footer && (
        <div className={`footer ${isolated(!image && !text && !title)}`}>
          <p>{footer}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
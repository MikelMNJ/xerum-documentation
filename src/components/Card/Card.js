import React from 'react';
import { urlValid } from 'helpers/validators';
import { trimText, buildClasses } from 'helpers/utilityHelpers';
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
  const classes = [
    { condition: className, name: className },
    { condition: vertical, name: "vertical" },
  ];

  const handleClick = e => {
    const validUrl = urlValid(url);
    if (validUrl) window.open(validUrl, rest.target || "_blank");
  };

  const isolated = condition => condition ? "noVertical" : "";

  return (
    <div className={buildClasses(classes, "cardContainer")} {...rest}>
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
import React from 'react';

const ChevronDown = (props) => {
  const { style, size = 1, ...other } = props;
  const mergedStyle = { width: size * 20, ...style };

  return (
    <div style={mergedStyle} {...other}>
      <svg viewBox="0 0 12 6" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="New-Grid" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <polygon
            id="chevron_right"
            fill="currentColor"
            transform="translate(6.000000, 3.000000) rotate(90.000000) translate(-6.000000, -3.000000) "
            points="4.13924051 -3 9 3 4.13924051 9 3 7.59375 6.72151899 3 3 -1.59375"
          />
        </g>
      </svg>
    </div>
  );
};

export default ChevronDown;

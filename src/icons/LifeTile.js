import React from 'react';

const LifeTile = (props) => {
  const { style, hovered, size = 1, ...other } = props;
  const mergedStyle = { width: size * 20, ...style };

  return (
    <div style={mergedStyle} {...other}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path d="M25 0h150v200H25z" />
          <path
            d="M119.9 104.1c-4 0-7.8-.5-11-1.5-1.4-.4-2.3-1.7-2.3-3.1-.1-9.7 4.9-23.5 13.4-29.8 8.5-6.4 23.1-7.3 32.4-4.6 1.4.4 2.3 1.7 2.3 3.1.1 9.7-4.9 23.5-13.4 29.8-5.6 4.3-13.8 6.1-21.4 6.1zm-6.7-7.1c7.6 1.4 18.3.3 24.2-4.1 5.9-4.4 9.9-14.4 10.7-22.1-8.3-1.5-20.7-.4-26.5 6.2-4 4.6-7.5 11.1-8.4 20z"
            fill={hovered ? '#fff' : '#d84713'}
            fillRule="nonzero"
          />
          <path
            d="M98.8 155.8c-1.8 0-3.2-1.5-3.2-3.2V89c0-15.1-4.6-26.2-13.6-32.9-7.3-5.4-20.7-6.8-29.9-5 .9 9.4 6.1 21.8 13.4 27.2 5 3.7 13.3 5.9 21.7 5.8 1.8 0 3.3 1.4 3.3 3.2 0 1.8-1.4 3.3-3.2 3.3-9.9.1-19.5-2.5-25.6-7.1-10-7.4-16.1-23.6-16.2-34.9 0-1.4.9-2.7 2.3-3.1 10.9-3.2 28.1-2.1 38.1 5.4 10.7 8 16.2 20.8 16.2 38.1v63.5c0 1.9-1.5 3.3-3.3 3.3z"
            fill={hovered ? '#fff' : '#2B2727'}
            fillRule="nonzero"
          />
        </g>
      </svg>
    </div>
  );
};

export default LifeTile;

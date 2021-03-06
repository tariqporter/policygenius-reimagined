import React from 'react';

const RentersTile = (props) => {
  const { style, hovered, size = 1, ...other } = props;
  const mergedStyle = { width: size * 20, ...style };

  return (
    <div style={mergedStyle} {...other}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path d="M25 0h150v200H25z" />
          <path
            d="M80.3 92.3c-6.1 0-11.1-5-11.1-11.1s5-11.1 11.1-11.1 11.1 5 11.1 11.1-5 11.1-11.1 11.1zm0-15.8c-2.6 0-4.6 2.1-4.6 4.6 0 2.5 2.1 4.6 4.6 4.6 2.6 0 4.6-2.1 4.6-4.6 0-2.5-2.1-4.6-4.6-4.6z"
            fill={hovered ? '#fff' : '#d84713'}
            fillRule="nonzero"
          />
          <path
            d="M148 125.8s-37.4-37.3-39.5-39.4c6.7-6.7 9.4-19.6.3-28.7-9.6-9.6-22.6-5.3-25.9-2-7.8-5.8-18.9-5.1-26 2-3.8 3.8-5.9 8.8-5.9 14.2 0 4.3 1.4 8.4 3.9 11.9-5.8 7.9-5.2 19 1.9 26.1 7.8 7.8 20.7 7.9 28.7-.4l6.7 6.7c.6.6 1.4 1 2.3 1h7.4v7.6c0 1.8 1.5 3.2 3.2 3.2h8.8v5.8c0 1.8 1.5 3.2 3.2 3.2 1.7 0 3.2-1.5 3.2-3.2v-9c0-1.8-1.5-3.2-3.2-3.2h-8.8V114c0-1.8-1.5-3.2-3.2-3.2H96l-8.1-8.1c-1.2-1.2-3.2-1.3-4.5-.1l-2.8 2.8c-5.3 5.3-13.8 5.3-19.1 0-5.5-5.5-5.1-14.1 0-19.2 1.5-1.5.9-3.7 0-4.6-4.6-4.6-5.9-13.2 0-19.1 5.3-5.3 13.9-5.3 19.2.1.9.9 3.1 1.4 4.5-.1 3.7-3.7 12.3-6.7 19.1 0 7.1 7.1 3.2 16 0 19.1l-2.7 2.7c-1.4 1.4-1.2 3.4 0 4.6l40.8 40.7v11.7h-13c-1.8 0-3.2 1.5-3.2 3.2 0 1.7 1.5 3.2 3.2 3.2h16.3c1.8 0 3.2-1.5 3.2-3.2v-16.3c.1-.9-.3-1.8-.9-2.4z"
            fill={hovered ? '#fff' : '#2B2727'}
            fillRule="nonzero"
          />
        </g>
      </svg>
    </div>
  );
};

export default RentersTile;

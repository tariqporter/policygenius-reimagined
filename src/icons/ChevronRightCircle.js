import React from 'react';

const ChevronRightCircle = (props) => {
  const { style, size = 1, ...other } = props;
  const mergedStyle = { width: size * 22, ...style };

  return (
    <div style={mergedStyle} {...other}>
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
          <circle cx="9" cy="9" r="9" fill="#fff" stroke="currentColor" />
          <path
            fill="currentColor"
            fillRule="nonzero"
            stroke="currentColor"
            d="M7.668 4.642a.587.587 0 00-.168.42c0 .14.043.277.128.38L10.795 9l-3.157 3.555a.592.592 0 00-.138.384c0 .136.043.272.138.384.099.118.23.178.362.177a.488.488 0 00.36-.177l3.494-3.928A.594.594 0 0012 9a.636.636 0 00-.146-.4L8.361 4.677a.488.488 0 00-.362-.177.459.459 0 00-.331.142z"
          />
        </g>
      </svg>
    </div>
  );
};

export default ChevronRightCircle;

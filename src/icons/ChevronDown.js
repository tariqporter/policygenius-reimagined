import React from 'react';

const ChevronDown = (props) => {
  const { style, size = 1, ...other } = props;
  const mergedStyle = { width: size * 20, ...style };

  return (
    <div style={mergedStyle} {...other}>
      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.81 1.22337C12.6565 1.06888 12.4518 1.0008 12.2505 1.00033C12.0643 0.999886 11.8809 1.0567 11.7437 1.17097L7 5.3936L2.26054 1.18372C2.12642 1.06564 1.93728 1.00067 1.74767 1.00001C1.56663 0.999372 1.38556 1.05736 1.23567 1.18372C1.07889 1.31587 0.998402 1.49032 1.00002 1.66732C1.00158 1.83681 1.07842 2.00864 1.23567 2.1479L6.47295 6.80539C6.60698 6.91755 6.77468 7 7 7C7.22532 7 7.39619 6.91108 7.53271 6.80539L12.7645 2.1479C12.9098 2.02384 12.9982 1.84761 13 1.66471C13.0014 1.51359 12.9437 1.35792 12.81 1.22337Z"
          fill="white"
          stroke="white"
        />
      </svg>
    </div>
  );
};

export default ChevronDown;

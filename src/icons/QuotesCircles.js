import React from 'react';

const PgLogoBlack = (props) => {
  const { style, size = 1, ...other } = props;
  const mergedStyle = { width: size * 123, height: size * 22, ...style };

  return (
    <div style={mergedStyle} {...other}>
      <svg width="323" height="286" viewBox="0 0 323 286" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
          <circle cx="216.5" cy="159.5" r="90.5" transform="rotate(-180 216.5 159.5)" fill="#D84713" />
          <circle cx="126.5" cy="106.5" r="90.5" transform="rotate(-180 126.5 106.5)" fill="#F2E5CE" />
          <path
            d="M155.279 118.688C155.279 112.784 151.535 107.888 145.775 107.888C145.343 107.888 144.623 107.888 143.903 108.032L143.039 108.176L141.887 107.024C143.183 101.408 148.799 93.776 158.447 84.992L154.991 81.104C138.431 90.32 129.071 102.704 129.071 116.096C129.071 126.464 134.543 132.08 143.039 132.08C149.951 132.08 155.279 125.456 155.279 118.688ZM121.439 118.688C121.439 112.784 117.695 107.888 111.935 107.888C111.503 107.888 110.783 107.888 110.063 108.032L109.199 108.176L108.047 107.024C109.343 101.408 114.959 93.776 124.607 84.992L121.151 81.104C104.591 90.32 95.2307 102.704 95.2307 116.096C95.2307 126.464 100.703 132.08 109.199 132.08C116.111 132.08 121.439 125.456 121.439 118.688Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="323"
            height="286"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset dx="-10" dy="10" />
            <feGaussianBlur stdDeviation="12.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.168627 0 0 0 0 0.152941 0 0 0 0 0.152941 0 0 0 0.08 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default PgLogoBlack;

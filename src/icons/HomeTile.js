import React from 'react';

const HomeTile = (props) => {
  const { style, hovered, size = 1, ...other } = props;
  const mergedStyle = { width: size * 20, ...style };

  return (
    <div style={mergedStyle} {...other}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g fillRule="nonzero" fill="none">
          <path
            d="M80.135 51.452a1.78 1.78 0 01-1.273-.534L50.415 22.126a.749.749 0 00-.54-.222.754.754 0 00-.54.222L21.073 50.914c-.7.716-1.838.72-2.544.01a1.837 1.837 0 01-.007-2.575L46.78 19.561a4.31 4.31 0 013.088-1.301h.007a4.3 4.3 0 013.084 1.291l28.446 28.791a1.837 1.837 0 010 2.576c-.35.356-.81.534-1.27.534"
            fill={hovered ? '#fff' : '#2B2727'}
          />
          <path
            d="M74.152 50.045c-.996 0-1.8.815-1.8 1.822v25.496c0 .421-.355.781-.77.781H59.756v-15.35c0-2.438-1.96-4.424-4.368-4.424H45.365c-2.412 0-4.372 1.986-4.372 4.424v15.35H28.912a.789.789 0 01-.77-.78V51.866a1.809 1.809 0 00-1.798-1.822c-.996 0-1.8.815-1.8 1.822v25.496c0 2.438 1.96 4.421 4.368 4.421h13.882a1.808 1.808 0 001.777-2.078c.013-.086.02-.175.02-.26V62.794c0-.425.355-.78.774-.78h10.024c.415 0 .77.355.77.78v16.65c0 .086.007.175.02.26a1.808 1.808 0 001.777 2.079h13.625c2.41 0 4.368-1.982 4.368-4.42V51.866a1.809 1.809 0 00-1.797-1.822"
            fill={hovered ? '#fff' : '#2B2727'}
          />
          <path
            d="M74.152 38.078a1.81 1.81 0 01-1.8-1.821V24.03a.786.786 0 00-.77-.781h-6.426a2.24 2.24 0 00-.774.123v.918a1.808 1.808 0 01-1.797 1.819c-.994 0-1.801-.815-1.801-1.819v-1.39c0-1.877 1.878-3.295 4.372-3.295h6.425c2.41 0 4.369 1.983 4.369 4.425v12.226a1.809 1.809 0 01-1.798 1.822"
            fill={hovered ? '#fff' : '#d84713'}
          />
        </g>
      </svg>
    </div>
  );
};

export default HomeTile;

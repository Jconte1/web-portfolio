import React from 'react';
import '../global.css';  // Adjusted the path to point to the root directory


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

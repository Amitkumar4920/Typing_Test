import React from 'react';

const svg = `
  <!-- Replace this with your SVG animation code -->
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  </svg>
`;

const TypingAnimation = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default TypingAnimation;

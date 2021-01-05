import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

const TestUseItem = ({ count }) => {
  const [color, setColor] = useState('yellow');

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.body.style.backgroundColor = { color };
  });

  return (
    <Test>
      <h1 style={{ background: color }}>Hallo Test</h1>
      <p style={{ color }}>You clicked {count} times</p>
      <button onClick={() => setColor('blue')}>Click me</button>
      <button onClick={() => setColor('green')}>Click me</button>
      <div style={{ background: color }}>
        <h1>Halllo</h1>
      </div>
    </Test>
  );
};

const Test = styled.div`
  background: red;
  height: 40vh;
`;

export default TestUseItem;

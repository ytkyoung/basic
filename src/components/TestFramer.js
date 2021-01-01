import { animate } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

function TestFramer({ from, to }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        node.textContent = value.toFixed(2);
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <p ref={nodeRef} />;
}

export default function App() {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(100);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFrom(to);
      setTo(Math.floor(Math.random() * 100));
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [to]);

  return <TestFramer from={from} to={to} />;
}

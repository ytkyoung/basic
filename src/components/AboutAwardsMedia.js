import React, { useState, useCallback, useLayoutEffect } from 'react';

const getDimensionsObject = (node) => {
  const rect = node.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
  };
};

const useSize = () => {
  const [dimensions, setDimensions] = useState({});
  const [node, setNode] = useState(null);

  const ref = useCallback((node) => {
    setNode(node);
  }, []);

  useLayoutEffect(() => {
    if (node) {
      const measure = () => setDimensions(getDimensionsObject(node));
      measure();
    }
  }, [node]);
  return [ref, dimensions];
};

const AboutAwardsMedia = ({ img, active, x, y }) => {
  const [ref, { width, height }] = useSize();
  return (
    <div className="media-item">
      <img
        className={active ? 'is-active' : undefined}
        ref={ref}
        src={img}
        alt="award"
        style={{
          transform: `translate(${x - width / 2}px, ${y - height / 2}px)`,
        }}
      />
    </div>
  );
};

export default AboutAwardsMedia;

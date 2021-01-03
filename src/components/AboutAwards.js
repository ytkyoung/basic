import React, { useEffect } from 'react';
import data from '../data/awards.json';
import AboutAwardsItem from '../components/AboutAwardsItem';
import AboutAwardsMedia from '../components/AboutAwardsMedia';
import styled from 'styled-components';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

const AboutAwards = () => {
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const { x, y } = useMousePosition();
  console.log(x, y);
  return (
    <AwardsWrapper>
      <div className="awards-title">
        <h2>Awards</h2>
      </div>
      <div className="awards-text">
        <p>
          While results are what matter most, we believe awards bring value and
          recognition to organizations as well as individuals. full awardslist
        </p>
        <button>full awardslist</button>
      </div>
      <div className="awards-list">
        {data.map(({ title, number }, index) => (
          <AboutAwardsItem
            key={index}
            index={index}
            title={title}
            number={number}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
      <div className="awards-media">
        {data.map(({ img }, index) => {
          const isActive = index === activeIndex;
          const xPos = isActive ? x : x;
          const yPos = isActive ? y : y;
          return (
            <AboutAwardsMedia
              img={img}
              active={isActive}
              key={index}
              index={index}
              x={xPos}
              y={yPos}
            />
          );
        })}
      </div>
    </AwardsWrapper>
  );
};

const AwardsWrapper = styled.div`
  min-height: 100vh;

  .awards-list {
    position: relative;
    mix-blend-mode: difference;
    z-index: 1;
    &:hover {
      .award-title {
        opacity: 0.1;
      }
    }
  }
  /* .awards-media {
    position: relative;
  } */
  .media-item {
    z-index: -100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
      opacity: 0;
      position: absolute;
      width: auto;
      height: auto;
      max-height: 90%;
      max-width: 80%;
      object-fit: contain;
      pointer-events: none;
      transition: all 0.5s ease-out;
      top: -35%;
      left: -15%;
      &.is-active {
        opacity: 1;
      }
    }
  }
`;

export default AboutAwards;

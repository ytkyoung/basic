import styled from 'styled-components';

const Test = () => {
  return (
    <SpotTest>
      <div className="page-header">HASDAS</div>
    </SpotTest>
  );
};

const SpotTest = styled.section`
  background-color: rgba(0, 0, 0, 0.685);
  h1 {
    font-size: 4rem;
  }
  .page-header {
    height: 100vh;
  }

  &:after {
    z-index: -1;
    animation: grain 8s steps(10) infinite;
    background-image: url(/images/Rectangle.png);
    content: '';
    height: 300%;
    left: -50%;
    opacity: 0.3;
    position: fixed;
    top: -110%;
    width: 200%;
  }

  @keyframes grain {
    0%,
    100% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(-5%, -10%);
    }
    20% {
      transform: translate(-15%, 5%);
    }
    30% {
      transform: translate(7%, -25%);
    }
    40% {
      transform: translate(-5%, 25%);
    }
    50% {
      transform: translate(-15%, 10%);
    }
    60% {
      transform: translate(15%, 0%);
    }
    70% {
      transform: translate(0%, 15%);
    }
    80% {
      transform: translate(3%, 35%);
    }
    90% {
      transform: translate(-10%, 10%);
    }
  }
`;

export default Test;

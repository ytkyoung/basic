import Culture from '../img/Culture.mp4';
import styled from 'styled-components';

const Spotlight = () => {
  return (
    <SpotLight>
      <Description>
        <div className="spotlight-title">
          <Hide>
            <h2>
              BASIC® HELPS <span>BRANDS</span>
              <br /> ●CONNECT <br />
              <span>W/ CULTURE</span>
            </h2>
          </Hide>
          <p>ADWEEK (AGENCY SPOTLIGHT)</p>
          <button>About us</button>
        </div>
      </Description>
      <CultureVideo>
        <video className="videoTag" autoPlay loop muted>
          <source src={Culture} type="video/mp4" />
        </video>
        <OverlayText>
          <TopText>
            <h1>
              <span>#</span>BASIC
            </h1>
          </TopText>
        </OverlayText>
      </CultureVideo>
    </SpotLight>
  );
};

const SpotLight = styled.section`
  height: 100%;
  padding-top: 12rem;
  padding-bottom: 12rem;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Description = styled.div`
  flex: 1 3 55%;
  h2 {
    font-size: 9rem;
  }
  button {
    margin-top: 3rem;
  }
`;

const CultureVideo = styled.div`
  position: relative;
  flex: 1 3 45%;
  background: #004280;
  display: flex;
  justify-content: flex-end;
  video {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const OverlayText = styled.div`
  position: absolute;
  top: 30%;
  left: 7%;
  z-index: 1;
`;

const TopText = styled.div`
  color: white;
  font-size: 20px;
  align-self: center;
  h1 {
    font-size: 9vw;
    opacity: 0.3;
    font-family: 'Inter', sans-serif;
    span {
      color: #ffffff;
    }
  }
  h1:hover {
    color: #f9cdcd;
    opacity: 1;
  }
`;

export default Spotlight;

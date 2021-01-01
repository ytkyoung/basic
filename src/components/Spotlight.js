import Culture from '../img/Culture.mp4';
import styled from 'styled-components';

const Spotlight = () => {
  return (
    <SpotLight>
      <Description>
        <div className="spotlight-title">
          <Hide>
            <h2>
              BASIC® HELPS <span>BRANDS</span> ●CONNECT W/ <span>CULTURE</span>
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
          <TopText>Content above your video</TopText>
        </OverlayText>
      </CultureVideo>
    </SpotLight>
  );
};

const SpotLight = styled.section`
  height: 90vh;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Description = styled.div`
  flex: 1;
  padding: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const CultureVideo = styled.div`
  z-index: 4;
  position: relative;
  flex: 1;
  overflow: hidden;
  video {
    width: 80%;
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
  left: 30%;
  z-index: 1;
`;

const TopText = styled.p`
  color: white;
  font-size: 20px;
  align-self: center;
`;

export default Spotlight;

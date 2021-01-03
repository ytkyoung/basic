import hero from '../img/Hero.mp4';
import styled from 'styled-components';

const HomeSection = () => {
  return (
    <>
      <HomeIntro>
        <div className="home-title1">
          <div className="hide">
            <h1>
              What's <span>next</span>
            </h1>
          </div>
          <div className="hide">
            <h1> starts</h1>
          </div>
        </div>
        <div className="home-title2">
          <div className="hide">
            <Here>
              <Point>●</Point> <h1>here</h1>
            </Here>
          </div>
        </div>
      </HomeIntro>
      <HeroVideo>
        <video className="videoTag" autoPlay loop muted>
          <source src={hero} type="video/mp4" />
        </video>
      </HeroVideo>
    </>
  );
};

//Styled Components

const HomeIntro = styled.div`
  min-height: 45vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  background-color: #f58585;
  .home-title1 {
    flex: 1 1 70%;
    padding-top: 3%;
    align-self: flex-start;
    background: yellow;
    h1 {
      letter-spacing: -2px;
    }
  }
  .home-title2 {
    flex: 1 1 30%;
    align-self: flex-end;
    background: #00ffaa;
    h1 {
      letter-spacing: -2px;
    }
  }
`;

const Here = styled.div`
  font-size: 8rem;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Point = styled.div`
  font-size: 9rem;
  color: green;
  position: relative;
  right: 7%;
`;

const HeroVideo = styled.div`
  .videoTag {
    width: 100%;
  }
`;

export default HomeSection;

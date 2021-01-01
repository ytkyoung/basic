import hero from '../img/Hero.mp4';
import styled from 'styled-components';

const HomeSection = () => {
  return (
    <>
      <HomeIntro>
        <div className="home-title-teil1">
          <div className="hide">
            <h2>
              What's <span>next</span>
            </h2>
          </div>
          <div className="hide">
            <h2> starts</h2>
          </div>
        </div>
        <div className="home-title-teil1">
          <div className="hide">
            <Here>
              <Point>●</Point> <h2>HERE</h2>
            </Here>
          </div>
        </div>
      </HomeIntro>
      <div className="home-hero-video">
        <video className="videoTag" autoPlay loop muted>
          <source src={hero} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

//Styled Components

const HomeIntro = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 5rem 10rem;
  background-color: #f58585;
`;

const Here = styled.div`
  font-size: 8rem;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Point = styled.div`
  font-size: 6.8rem;
  color: green;
  position: relative;
  top: -5px;
  right: 10px;
`;
export default HomeSection;

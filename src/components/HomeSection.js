import hero from '../img/Hero.mp4';
import styled from 'styled-components';
import { titleAnim, fade } from '../animation';
import { motion } from 'framer-motion';

const HomeSection = () => {
  return (
    <>
      <HomeIntro>
        <motion.div className="home-title1">
          <div className="hide">
            <motion.h1 variants={titleAnim}>
              What's <span>next</span>
            </motion.h1>
          </div>
          <div className="hide">
            <motion.h1 variants={titleAnim}> starts</motion.h1>
          </div>
        </motion.div>
        <motion.div className="home-title2" variants={titleAnim}>
          <div className="hide">
            <Here>
              <Point variants={titleAnim}>●</Point> <h1>here</h1>
            </Here>
          </div>
        </motion.div>
      </HomeIntro>
      <HeroVideo variants={fade}>
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
  .home-title1 {
    flex: 1 1 70%;
    padding-top: 3%;
    align-self: flex-start;
    h1 {
      letter-spacing: -2px;
    }
  }
  .home-title2 {
    flex: 1 1 30%;
    align-self: flex-end;
    h1 {
      letter-spacing: -2px;
    }
  }
  @media (max-width: 1300px) {
  }
  @media (max-width: 890px) {
    flex-direction: column;
    min-height: 20vh;
    .home-title1 {
      h1 {
        width: 40%;
        font-size: 4.5rem;
        letter-spacing: -2px;
      }
    }
    .home-title2 {
      h1 {
        width: 40%;
        font-size: 4.5rem;
        letter-spacing: -2px;
      }
    }
  }
`;

const Here = styled.div`
  font-size: 8rem;
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Point = styled(motion.div)`
  font-size: 9rem;
  position: relative;
  right: 7%;
  @media (max-width: 890px) {
    font-size: 5rem;
  }
`;

const HeroVideo = styled(motion.div)`
  .videoTag {
    width: 100%;
  }
`;

export default HomeSection;

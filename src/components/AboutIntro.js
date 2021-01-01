import { Intro } from '../styles.js';
import styled from 'styled-components';

const AboutIntro = () => {
  return (
    <>
      <AboutIntroStyle>
        <div className="About-intro-title">
          <h1>WE TURN CULTURAL VALUE</h1>
        </div>
        <div className="About-intro-title-part2">
          <h1>INTO COMPANY VALUE</h1>
          <p>
            BASIC® is an independent branding & experience design company
            working at the intersection of culture, design, and technology. We
            value our craft, have a deep passion for progression, and exist to
            solve challenges for brands we believe in. Since the beginning, our
            mission has been to do great work and to have a great time doing it.
            We believe our mission has guided us well.
          </p>
        </div>
      </AboutIntroStyle>
    </>
  );
};

const AboutIntroStyle = styled(Intro)`
  background: magenta;
  height: 100%;
  p {
    font-size: 3.5rem;
  }
`;

export default AboutIntro;

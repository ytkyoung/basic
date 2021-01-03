import styled from 'styled-components';

const AboutIntro = () => {
  return (
    <>
      <AboutIntroStyle>
        <div className="About-intro-title">
          <h1>
            WE TURN
            <br /> CULTURAL
            <br /> VALUE
          </h1>
        </div>
        <div className="About-intro-title-part2">
          <h1>●INTO COMPANY VALUE</h1>
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

const AboutIntroStyle = styled.section`
  background: magenta;
  height: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid green;
  .About-intro-title {
    background: red;
    flex: 1 1 50%;
    padding-top: 3%;
    align-self: flex-start;
    background: red;
  }
  .About-intro-title-part2 {
    flex: 1 1 50%;
    padding: 2rem;
    padding-top: 16%;
    align-self: flex-end;
    background: green;
  }
  p {
    font-size: 3rem;
    font-family: 'Scto Grotesk A Medium';
    line-height: 110%;
  }
`;

export default AboutIntro;

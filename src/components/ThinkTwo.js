import styled from 'styled-components';

const ThinkTwo = () => {
  return (
    <ThinkStyle>
      <div className="wrapper-think">
        <div className="think-one">
          <h2>BRANDBEATS®</h2>
          <p>
            Brandbeats® is our agency podcast garnering over 45,000+ listens per
            episode where we discuss industry happenings for 30 minutes as well
            as provide ten tracks of curated music. Our conversations are a
            candid exploration of design topics, branding trends, and
            experiences we’re noticing in culture.
          </p>
        </div>
        <div className="think-two">
          <h2>APPLIED®</h2>
          <p>
            Applied® is our panel series and thought-leadership platform where
            we share perspectives and tactics related to strategy, design, and
            technology. The content is raw and driven by honest observations and
            guided questions that use culture to explain why trends exist and
            how they impact business and tech.
          </p>
        </div>
        <div className="think-three"></div>
      </div>
    </ThinkStyle>
  );
};

const ThinkStyle = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 35vh;
  padding-top: 3rem;
  padding-bottom: 10vh;
  background: lime;
  border-top: 2px solid red;
  border-bottom: 2px solid red;
  .wrapper-think {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  & div:nth-child(1) {
    flex: 1 1 30%;
    background: red;
  }
  & div:nth-child(2) {
    flex: 1 1 30%;
    background: green;
  }
  & div:nth-child(3) {
    flex: 1 1 40%;
    background: #c78306;
  }
`;

export default ThinkTwo;

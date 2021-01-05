import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fade } from '../animation';

const ThinkTwo = () => {
  return (
    <ThinkStyle>
      <div className="wrapper-think">
        <motion.div className="think-one" variants={fade}>
          <h2>BRANDBEATS®</h2>
          <p>
            Brandbeats® is our agency podcast garnering over 45,000+ listens per
            episode where we discuss industry happenings for 30 minutes as well
            as provide ten tracks of curated music. Our conversations are a
            candid exploration of design topics, branding trends, and
            experiences we’re noticing in culture.
          </p>
        </motion.div>
        <motion.div className="think-two" variants={fade}>
          <h2>APPLIED®</h2>
          <p>
            Applied® is our panel series and thought-leadership platform where
            we share perspectives and tactics related to strategy, design, and
            technology. The content is raw and driven by honest observations and
            guided questions that use culture to explain why trends exist and
            how they impact business and tech.
          </p>
        </motion.div>
        <div className="think-three"></div>
      </div>
    </ThinkStyle>
  );
};

const ThinkStyle = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 3rem;
  padding-bottom: 5rem;
  border-top: 1px solid #252422;

  .wrapper-think {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  & div:nth-child(1) {
    flex: 1 1 30%;
  }
  & div:nth-child(2) {
    flex: 1 1 30%;
    margin-left: 5rem;
  }
  & div:nth-child(3) {
    flex: 1 1 40%;
  }
`;

export default ThinkTwo;

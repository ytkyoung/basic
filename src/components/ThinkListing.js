import styled from 'styled-components';
import ThinkItem from '../components/ThinkItem';
import data from '../data/thinking.json';
import { motion } from 'framer-motion';
import { titleAnim, fade } from '../animation';

const ThinkListing = ({ theme }) => {
  return (
    <SnapStyle>
      <motion.div className="think-lists" variants={(titleAnim, fade)}>
        {data.map((news, index) => (
          <ThinkItem key={index} news={news} theme={theme} />
        ))}
      </motion.div>
    </SnapStyle>
  );
};

const SnapStyle = styled.div``;

export default ThinkListing;

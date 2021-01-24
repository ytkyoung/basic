import styled from 'styled-components';

import NewsItem from '../components/NewsItem';
import data from '../data/news.json';
import { motion } from 'framer-motion';
import { titleAnim, fade } from '../animation';

const NewsListing = ({ theme }) => {
  return (
    <SnapStyle>
      <motion.div className="news-lists" variants={(titleAnim, fade)}>
        {data.map((news, index) => (
          <NewsItem key={index} news={news} theme={theme} />
        ))}
      </motion.div>
    </SnapStyle>
  );
};

const SnapStyle = styled.section`
  .featured-news {
    h2 {
      text-transform: uppercase;
    }
  }
`;

export default NewsListing;

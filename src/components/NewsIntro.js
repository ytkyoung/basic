import styled from 'styled-components';
import { IntroPlane } from '../styles.js';

const NewsIntro = () => {
  return (
    <NewsIntroStyle>
      <div className="news-intro">
        <h2>News</h2>
      </div>
      <div className="news-point">
        <h2>●</h2>
      </div>
    </NewsIntroStyle>
  );
};

const NewsIntroStyle = styled(IntroPlane)``;

export default NewsIntro;

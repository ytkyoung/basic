import styled from 'styled-components';
import { NewsStyle } from '../styles.js';

import iconBlack from '../img/arrow-black.svg';
import iconPink from '../img/arrow.svg';

const NewsItem = (props) => {
  const isLight = props.theme === 'light';
  return (
    <NewsItemStyle>
      <div className="news">
        <div className="news-img">
          <img src={props.news.img} alt="news" />
        </div>
        <div className="news-box">
          <div className="news-title">
            <h2>{props.news.title}</h2>
          </div>
          <div className="news-info">
            <div className="news-category">
              <h4>{props.news.category}</h4>
            </div>
            <div className="news-date">
              <h4>{props.news.date}</h4>
            </div>
          </div>
        </div>
        <div className="news-arrow">
          {isLight ? (
            <img src={iconBlack} alt="arrow" />
          ) : (
            <img src={iconPink} alt="arrow" />
          )}
        </div>
      </div>
    </NewsItemStyle>
  );
};

const NewsItemStyle = styled(NewsStyle)`
  .news-arrow {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    img {
      width: 20%;
    }
  }
  h2 {
    text-transform: none;
    line-height: 100%;
    font-weight: 500;
  }
`;

export default NewsItem;

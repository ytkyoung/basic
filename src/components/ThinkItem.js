import styled from 'styled-components';
import { NewsStyle } from '../styles.js';
import iconBlack from '../img/arrow-black.svg';
import iconPink from '../img/arrow.svg';

const Thinkitem = (props) => {
  console.log(props.theme);
  console.log('theme thinkitem');
  const isLight = props.theme === 'light';
  return (
    <ThinkNews>
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
              <h3>{props.news.category}</h3>
            </div>
            <div className="news-date">
              <h3>{props.news.date}</h3>
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
    </ThinkNews>
  );
};

const ThinkNews = styled(NewsStyle)`
  .news-arrow {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    img {
      width: 15%;
    }
  }
`;

export default Thinkitem;

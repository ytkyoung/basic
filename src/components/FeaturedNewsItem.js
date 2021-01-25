import styled from 'styled-components';
import iconBlack from '../img/arrow-black.svg';
import iconPink from '../img/arrow.svg';

const FeaturedNewsItem = (props) => {
  const isLight = props.theme === 'light';
  return (
    <FeaturedStyle>
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
    </FeaturedStyle>
  );
};

const FeaturedStyle = styled.div`
  border-top: 1px solid ${({ theme }) => theme.text};
  padding: 2.2rem 0rem 6.7rem 0rem;
  .news {
    display: flex;
    justify-content: space-between;
  }
  .news-img {
    flex: 1 1 30%;
    img {
      width: 100%;
    }
  }
  .news-title {
    width: 40%;
    h2 {
      text-transform: uppercase;
      line-height: 110%;
      font-family: var(--font-regular);
      font-weight: regular;
    }
  }
  .news-box {
    padding-left: 2.2rem;
    flex: 1 1 65%;
    display: flex;
    justify-content: space-between;
    align-items: space-between;
    flex-direction: column;
  }
  .news-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .news-category {
    padding-right: 2rem;
  }
  .news-arrow {
    flex: 1 1 10%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    img {
      width: 20%;
    }
  }
  @media (max-width: 890px) {
    padding: 2.2rem 0rem 2rem 0rem;
    .news {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      position: relative;
    }
    .news-box {
      padding-left: 0rem;
    }
    .news-title {
      width: 100%;
      padding: 0;
      padding-top: 2rem;
      h2 {
        font-size: 2.5rem;
      }
    }
    .news-category {
      h4 {
        font-family: 'Scto Grotesk A Bold';
      }
    }
    .news-info {
      height: 8vh;
      align-items: flex-end;
      h4 {
        font-size: 1.1rem;
      }
    }
    .news-arrow {
      position: absolute;
      bottom: 0;
      right: 0;
      img {
        width: 14%;
      }
    }
  }
`;

export default FeaturedNewsItem;

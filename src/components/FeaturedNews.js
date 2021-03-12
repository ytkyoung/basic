import FeaturedNewsItem from '../components/FeaturedNewsItem';
import data from '../data/fnews.json';
import styled from 'styled-components';

const FeaturedNews = ({ theme }) => {
  return (
    <NewsStyle>
      <div className="featured-news">
        <div className="news-title-main">
          <h2>
            Featured <br />
            News
          </h2>
        </div>
        <div className="news-box">
          {data.map((news, index) => (
            <FeaturedNewsItem key={index} news={news} theme={theme} />
          ))}
        </div>
      </div>
    </NewsStyle>
  );
};

const NewsStyle = styled.section`
  .featured-news {
  }
  .news-title-main {
    padding-bottom: 3rem;
    h2 {
      text-transform: uppercase;
      font-weight: var(--font-bold);
    }
  }
`;

export default FeaturedNews;

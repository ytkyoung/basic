import FeaturedNewsItem from '../components/FeaturedNewsItem';
import data from '../data/fnews.json';
import styled from 'styled-components';

const FeaturedNews = () => {
  return (
    <NewsStyle>
      <div className="featured-news">
        <div className="news-title">
          <h2>Featured News</h2>
        </div>
        <div className="news-box">
          {data.map((news, index) => (
            <FeaturedNewsItem key={index} news={news} />
          ))}
        </div>
      </div>
    </NewsStyle>
  );
};

const NewsStyle = styled.section`
  background: yellow;
  .featured-news {
    h2 {
      text-transform: uppercase;
    }
  }

  .news-title {
    h2 {
      color: #004d80;
      font-family: 'Scto Grotesk A Medium';
    }
  }
`;

export default FeaturedNews;

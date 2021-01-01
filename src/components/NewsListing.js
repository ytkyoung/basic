import styled from 'styled-components';
import NewsItem from '../components/NewsItem';
import data from '../data/news.json';

const NewsListing = () => {
  return (
    <SnapStyle>
      <div className="news-lists">
        {data.map((news, index) => (
          <NewsItem key={index} news={news} />
        ))}
      </div>
    </SnapStyle>
  );
};

const SnapStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export default NewsListing;

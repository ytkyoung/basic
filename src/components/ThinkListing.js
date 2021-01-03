import styled from 'styled-components';
import ThinkItem from '../components/ThinkItem';
import data from '../data/thinking.json';

const ThinkListing = () => {
  return (
    <SnapStyle>
      <div className="think-lists">
        {data.map((news, index) => (
          <ThinkItem key={index} news={news} />
        ))}
      </div>
    </SnapStyle>
  );
};

const SnapStyle = styled.div``;

export default ThinkListing;

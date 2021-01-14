import styled from 'styled-components';
import ThinkItem from '../components/ThinkItem';
import data from '../data/thinking.json';

const ThinkListing = ({ theme }) => {
  return (
    <SnapStyle>
      <div className="think-lists">
        {data.map((news, index) => (
          <ThinkItem key={index} news={news} theme={theme} />
        ))}
      </div>
    </SnapStyle>
  );
};

const SnapStyle = styled.div``;

export default ThinkListing;

import styled from 'styled-components';
import ThinkItem from '../components/ThinkItem';
import data from '../data/thinking.json';

const ThinkListing = () => {
  return (
    <SnapStyle>
      <div className="think-lists">
        {data.map((think, index) => (
          <ThinkItem key={index} think={think} />
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

export default ThinkListing;

import styled from 'styled-components';

const AboutAwardsItem = ({ title, number, setActiveIndex, index }) => {
  return (
    <ItemWrapper>
      <div
        className="award-item"
        onMouseEnter={() => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(-1)}
      >
        <div className="award-title">
          <h2>{title}</h2>
          <h5>{number}</h5>
        </div>
      </div>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  margin-bottom: 3vh;
  .award-item {
  }
  .award-title {
    display: flex;
    padding: 1.9rem 0rem;
    transition: opacity 0.35s cubic-bezier(0.77, 0, 0.175, 1);
    h2 {
      font-size: 7.5rem;
    }
    h5 {
      font-size: 2rem;
    }
    &:hover {
      opacity: 1 !important;
    }
  }
  @media (max-width: 890px) {
    .award-title {
      h2 {
        font-size: 5.5rem;
      }
      h5 {
        font-size: 2rem;
      }
    }
  }
`;

export default AboutAwardsItem;

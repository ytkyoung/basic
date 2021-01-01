import styled from 'styled-components';
import AboutSnapshotItem from '../components/AboutSnapshotItem';
import data from '../data/snapshots.json';

const AboutSnapshot = () => {
  return (
    <SnapStyle>
      <div className="snap-title">
        <h2>Agency Snapshot</h2>
      </div>
      <div className="snap-stats">
        {data.map((shot, index) => (
          <AboutSnapshotItem key={index} shot={shot} />
        ))}
      </div>
    </SnapStyle>
  );
};

const SnapStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .snap-title {
    margin-top: 15rem;
    flex: 1 1 30%;
    background: red;
    h2 {
      width: 50%;
    }
  }
  .snap-stats {
    flex: 1 1 70%;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .snap-card {
    flex: 1 1 50%;
    background: #66ff00;
    padding: 15rem 10rem 15rem 5rem;
    p {
      width: 80%;
    }
  }
`;

export default AboutSnapshot;

import styled from 'styled-components';
import AboutSnapshotItem from '../components/AboutSnapshotItem';
import data from '../data/snapshots.json';

const AboutSnapshot = () => {
  return (
    <SnapStyle>
      <div className="snap-title">
        <h2>
          Agency <br /> Snapshot
        </h2>
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
  margin-top: 5rem;
  .snap-title {
    flex: 1 1 30%;
    h2 {
      width: 50%;
      text-transform: uppercase;
      font-size: 3.5rem;
    }
  }
  .snap-stats {
    flex: 1 1 70%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .snap-card {
    flex: 1 1 50%;
    h2 {
      padding-bottom: 2rem;
    }
    p {
      width: 80%;
    }
  }
  @media (max-width: 890px) {
    flex-direction: column;
    .snap-card {
      display: flex;
      padding-top: 4rem;
      flex: 1 1 100%;
      h2 {
        padding-bottom: 2rem;
      }
      p {
        width: 80%;
      }
    }
    .snap-card-title {
      flex: 1 1 33.333%;
    }
    .snap-card-stat {
      flex: 1 1 33.333%;
      h1 {
        font-size: 3rem;
      }
    }
    .snap-card-text {
      flex: 1 1 33.333%;
    }
  }
`;

export default AboutSnapshot;

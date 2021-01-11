import styled from 'styled-components';

export const FlexTest = styled.section`
  height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IntroPlane = styled.section`
  height: 30vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 12rem;
    line-height: 85%;
  }

  p {
    color: red;
    background: blue;
    font-size: 1.8rem;
    font-family: var(--font-medium);
    font-weight: medium;
  }
  @media (max-width: 890px) {
    h2 {
      font-size: 7rem;
      line-height: 90%;
    }
  }
`;

export const Intro = styled.section`
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 9rem;
    line-height: 90%;
  }

  & p {
    font-size: 1.8rem;
    font-family: var(--font-medium);
    font-weight: medium;
  }
  & div:nth-child(1) {
    flex: 1 1 50%;
    padding-top: 8%;
    align-self: flex-start;
  }
  & div:nth-child(2) {
    flex: 1 1 50%;
    padding: 2rem;
    align-self: flex-end;
  }
  @media (max-width: 890px) {
    height: 100%;
    background: magenta;
    flex-direction: column;
    h1 {
      font-size: 7rem;
      line-height: 90%;
    }
  }
`;

// export const Description = styled.div`
//   flex: 1;
//   padding: 5rem;
//   h2 {
//     font-weight: lighter;
//   }
// `;

// export const Hide = styled.div`
//   overflow: hidden;
// `;

export const NewsStyle = styled.div`
  border-top: 1px solid #252422;
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
      line-height: 100%;
      font-weight: 500;
      font-family: var(--font-regular);
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
    h3 {
      font-size: 1.2rem;
    }
  }
  .news-category {
    padding-right: 2rem;
  }
  .news-arrow {
    flex: 1 1 10%;
    display: flex;
    justify-content: flex-end;
  }
`;

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
    color: ${({ theme }) => theme.text};
  }

  p {
    color: ${({ theme }) => theme.text};
    background: blue;
    font-size: 1.8rem;
    font-family: var(--font-medium);
    font-weight: medium;
  }
  @media (max-width: 890px) {
    height: 100%;
    margin: 3rem 0rem;
    h2 {
      font-size: 5rem;
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
    flex-direction: column;
    h1 {
      width: 50%;
      font-size: 4rem;
      line-height: 90%;
    }
    p {
      width: 60%;
      font-size: 1.5rem;
      font-weight: var(--font-regular);
    }
    & div:nth-child(2) {
      flex: 1 1 50%;
      padding: 2rem 0rem;
      align-self: flex-end;
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
  border-top: 1px solid ${({ theme }) => theme.text};
  padding: 2.2rem 0rem 6.7rem 0rem;
  .news {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
  }
  .news-img {
    flex: 1 1 30%;
    img {
      width: 100%;
      object-fit: cover;
      transform: scale(1.1);
      transition: transform 0.5s, filter 1.5s ease-in-out;
      filter: grayscale(50%);
    }
    &:hover img {
      filter: grayscale(0);
      transform: scale(1);
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
    padding-left: 4rem;
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
  @media (max-width: 890px) {
    padding: 2.2rem 0rem 2rem 0rem;
    height: 100%;
    margin: 3rem 0rem;
    h2 {
      font-size: 5rem;
      line-height: 90%;
    }
    .news {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      position: relative;
    }
    .news-box {
      padding-left: 0rem;
    }
    .news-title {
      width: 100%;
      padding: 0;
      padding-top: 2rem;
      h2 {
        font-size: 2.5rem;
      }
    }
    .news-info {
      height: 10vh;
      align-items: flex-end;
      h4 {
        font-size: 1.3rem;
      }
    }
    .news-arrow {
      position: absolute;
      bottom: 0;
      right: 0;
      img {
        width: 5%;
      }
    }
  }
`;

import styled from 'styled-components';

export const FlexTest = styled.section`
  height: 90vh;
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Intro = styled.section`
  height: 90vh;
  background-color: #bfe6ad;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 12rem;
    line-height: 85%;
  }

  & p {
    color: red;
    background: blue;
    font-size: 1.8rem;
    font-family: 'Scto Grotesk A Medium';
  }
  & div:nth-child(1) {
    flex: 1 1 50%;
    padding-top: 8%;
    align-self: flex-start;
    background: red;
  }
  & div:nth-child(2) {
    flex: 1 1 50%;
    padding: 2rem;
    align-self: flex-end;
    background: green;
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

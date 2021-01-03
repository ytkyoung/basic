import styled from 'styled-components';

const ContactSec = () => {
  return (
    <SecStyle>
      <div className="sec1">
        <h3>SEC.</h3>
      </div>
      <div className="sec2">
        <h3>/B</h3>
        <h3>●</h3>
      </div>
    </SecStyle>
  );
};

const SecStyle = styled.section`
  background: orange;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .sec1 {
    flex: 1 1 30%;
  }
  .sec2 {
    flex: 1 1 70%;
    display: flex;
    justify-content: space-between;
  }
`;

export default ContactSec;

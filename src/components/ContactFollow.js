import styled from 'styled-components';

const ContactFollow = () => {
  return (
    <Follow>
      <div className="follow">
        <h2>Follow</h2>
      </div>

      <div className="wrapper-box">
        <div className="social">
          <h2>SOCIAL</h2>
          <ul>
            <li>
              <a href="https://www.instagram.com/">Instagram</a>
            </li>
            <li>
              <a href="https://www.twitter.com/">Twitter</a>
            </li>
            <li>
              <a href="https://www.twitter.com/">LinkedIn</a>
            </li>
            <li>
              <a href="https://www.facebook.com/">Facebook</a>
            </li>
          </ul>
        </div>

        <div className="stay">
          <div className="box1">
            <h2>Stay in Contact</h2>
          </div>
          <div className="box2">
            <form action="/">
              <input type="text" placeholder="Email Adress" />
            </form>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </Follow>
  );
};

const Follow = styled.section`
  height: 30vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: red;
  .follow {
    flex: 1 1 30%;
  }
  .social {
    flex: 1 1 33.3333%;
    li {
      padding: 2.2rem 0rem;
    }
    a {
      font-size: 1.8rem;
      text-decoration: underline;
      color: black;
    }
  }
  .wrapper-box {
    flex: 1 1 70%;
    display: flex;
    justify-content: space-between;
  }
  .stay {
    width: 50%;
    display: flex;
    flex-direction: column;
    h2 {
      text-transform: uppercase;
      font-size: 1.8rem;
    }
  }
  .line {
    height: 0.3rem;
    background: #35edce;
  }
  .box1 {
    background: magenta;
  }

  .box2 {
    background: #45d04c;
    .email-arrow {
      background: blue;
    }
  }
`;

export default ContactFollow;

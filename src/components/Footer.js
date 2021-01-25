import LogoBranding from '../components/LogoBranding';
import styled from 'styled-components';
import IconArrow from '../components/IconArrow';

const Footer = ({ theme }) => {
  return (
    <FooterStyle>
      <div className="footer-intro">
        <div className="brand-logo-icon">
          <LogoBranding theme={theme} />
        </div>
        <div className="footer-title">
          <h2>
            We collaborate with ambitious brands and people. Let’s connect :)
          </h2>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-email">
          <div className="box1">
            <h2>● STAY IN THE KNOW</h2>
          </div>
          <div className="box2">
            <form action="/">
              <input type="text" placeholder="Email Adress" />
            </form>
            <div className="email-arrow">
              <IconArrow />
            </div>
          </div>
          <div className="line"></div>
        </div>
        <div className="footer-overview">
          <div className="social">
            <h2>● SOCIAL</h2>
            <ul>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Linkedin</li>
              <li>Facebook</li>
            </ul>
          </div>
          <div className="initiatives">
            <h2>● INITIATIVES</h2>
            <ul>
              <li>Crafted</li>
              <li>Culture Manual</li>
              <li>Applied</li>
              <li>Brandbeats</li>
              <li>Moves</li>
            </ul>
          </div>
          <div className="offices">
            <h2>● OFFICES</h2>
            <ul>
              <li>San Diego – CA</li>
              <li>Bay Area – CA</li>
              <li>St. Louis – MO</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-credits">
        <h5>BASIC®, INC 10 - 20©</h5>
        <h5>EASY TO UNDERSTAND, IMPOSSIBLE TO IGNORE.™</h5>
        <h5>TERMS, PRIVACY POLICY</h5>
      </div>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  background-color: ${({ theme }) => theme.footerBG};
  margin: 0 auto;

  h2,
  h5 {
    color: ${({ theme }) => theme.footerColor};
  }
  li {
    color: ${({ theme }) => theme.footerColor};
  }

  .footer-intro {
    padding: 0 5%;
    height: 40vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-family: var(--font-regular);
      font-size: 3rem;
    }
  }
  .brand-logo-icon {
    flex: 1 2 50%;
    img {
      width: 15%;
    }
  }
  .footer-bottom {
    padding: 0 5%;
    height: 40vh;
    display: flex;
  }
  .footer-title {
    flex: 1 2 50%;
  }
  .footer-email {
    flex: 1 2 50%;
    h2 {
      font-size: 2rem;
      font-family: var(--font-regular);
    }
  }
  .box1 {
    justify-content: space-between;
  }
  .box2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20%;
    .email-arrow {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
  .line {
    height: 0.1rem;
    width: 81%;
    background: ${({ theme }) => theme.footerColor};
  }
  .footer-overview {
    flex: 1 4 50%;
    display: flex;
    justify-content: space-between;
    h2 {
      font-size: 2rem;
      font-family: var(--font-regular);
    }
    ul {
      padding-top: 2rem;
    }
    ul li {
      font-size: 1.6rem;
      font-family: var(--font-regular);
    }
    .offices {
      padding-right: 20%;
    }
  }

  .footer-credits {
    height: 7vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.055);
    padding: 0 5%;
  }
  @media (max-width: 890px) {
    display: flex;
    flex-direction: column;
    .footer-intro {
      padding-top: 3rem;
      flex-direction: column;
      position: relative;
    }
    .brand-logo-icon {
      padding: 0;
      position: absolute;
      top: 45%;
      left: 5%;
      img {
        width: 100%;
      }
    }
    .footer-bottom {
      height: 100%;
      flex-direction: column;
    }
    .footer-overview {
      height: 100%;
      flex-direction: column;
      & div:nth-child(1) {
        padding-top: 10rem;
      }
      & div:last-child {
        padding-bottom: 15rem;
      }
      & div {
        padding-top: 3rem;
      }
    }
  }
`;

export default Footer;

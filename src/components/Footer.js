import LogoBranding from '../components/LogoBranding';
import styled from 'styled-components';
import IconArrow from '../components/IconArrow';

const Footer = () => {
  return (
    <FooterStyle>
      <div className="footer-intro">
        <div className="brand-logo-icon">
          <LogoBranding />
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
            <h2>●STAY IN THE KNOW</h2>
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
            <h2>●SOCIAL</h2>
            <ul>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Linkedin</li>
              <li>Facebook</li>
            </ul>
          </div>
          <div className="initiatives">
            <h2>●INITIATIVES</h2>
            <ul>
              <li>Crafted</li>
              <li>Culture Manual</li>
              <li>Applied</li>
              <li>Brandbeats</li>
              <li>Moves</li>
            </ul>
          </div>
          <div className="offices">
            <h2>●OFFICES</h2>
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

const FooterStyle = styled.section`
  .footer-intro {
    height: 30vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      width: 80%;
      font-family: var(--font-regular);
      font-weight: regular;
    }
  }
  .brand-logo-icon {
    flex: 1 2 50%;
    img {
      width: 15%;
    }
  }
  .footer-bottom {
    height: 30vh;
    display: flex;
  }
  .footer-title {
    flex: 1 2 50%;
  }
  .footer-email {
    flex: 1 2 50%;
  }
  .box1 {
    justify-content: space-between;
    h2 {
      font-size: 2rem;
    }
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
    background: var(--color-font-black);
  }
  .footer-overview {
    flex: 1 4 50%;
    display: flex;
    justify-content: space-between;
    h2 {
      font-size: 2.2rem;
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
  }
`;

export default Footer;

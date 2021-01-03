import ContactImg from '../img/Contact-Header.jpg';
import styled from 'styled-components';

const ContactIntro = () => {
  return (
    <ContactStyle>
      <div className="contact-hero">
        <img src={ContactImg} alt="" />
      </div>
      <div className="contact-intro">
        <div className="contact-title">
          <h1>B /</h1>
          <h1>CONTACT</h1>
          <h4>
            EASY TO UNDERSTAND.
            <br /> IMPOSSIBLE TO IGNORE.™
            <br /> BASIC®, INC 10 - 20©
          </h4>
        </div>
        <div className="contact-box">
          <div className="contact-point">
            <h2>●</h2>
          </div>
          <div className="email-box">
            <div className="contact-email">
              <h2>NEW BUSINESS</h2>
              <div className="email">
                <a href="mailto:someone@yoursite.com?subject=Mail from Our Site">
                  hi@mail.com
                </a>
              </div>
            </div>
            <div className="contact-email">
              <h2>NEW BUSINESS</h2>
              <div className="email">
                <a href="mailto:someone@yoursite.com?subject=Mail from Our Site">
                  hi@mail.com
                </a>
              </div>
            </div>
          </div>
          <div className="email-box">
            <div className="contact-email">
              <h2>NEW BUSINESS</h2>
              <div className="email">
                <a href="mailto:someone@yoursite.com?subject=Mail from Our Site">
                  hi@mail.com
                </a>
              </div>
            </div>
            <div className="contact-email">
              <h2>NEW BUSINESS</h2>
              <div className="email">
                <a href="mailto:someone@yoursite.com?subject=Mail from Our Site">
                  hi@mail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled.div`
  display: flex;
  justify-content: center;

  .contact-hero {
    flex: 1 1 50%;
    img {
      width: 100%;
    }
  }
  .contact-intro {
    flex: 1 1 50%;
    display: flex;
    flex-direction: column;
    background: red;
  }
  .contact-title {
    flex: 1 1 50%;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    h4 {
      width: 50%;
      font-size: 1rem;
    }
  }
  .contact-box {
    flex: 1 1 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: #2bff00;
    padding-top: 20%;
  }
  .contact-point {
    flex: 1 1 35%;
    background: #00d9ff;
    h2 {
      font-size: 8rem;
    }
  }
  .email-box {
    flex: 1 1 65%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    background: #ff00dd;
  }
  .contact-email {
    padding-bottom: 5rem;
    h2 {
      padding-bottom: 3rem;
      font-size: 2rem;
    }
    a {
      font-size: 1.8rem;
      color: black;
      text-decoration: underline;
    }
  }
`;

export default ContactIntro;

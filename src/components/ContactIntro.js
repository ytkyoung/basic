import ContactImg from '../img/Contact-Header.jpg';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim, titleDot } from '../animation';

const ContactIntro = () => {
  return (
    <ContactStyle>
      <div className="contact-hero">
        <motion.img src={ContactImg} alt="Contact" variants={photoAnim} />
      </div>
      <div className="contact-intro">
        <div className="contact-title">
          <motion.h1 variants={(titleAnim, fade)}>B /</motion.h1>
          <motion.h1 variants={(titleAnim, fade)}>CONTACT</motion.h1>
          <motion.h4 variants={fade}>
            EASY TO UNDERSTAND.
            <br /> IMPOSSIBLE TO IGNORE.™
            <br /> BASIC®, INC 10 - 20©
          </motion.h4>
        </div>
        <div className="contact-box">
          <div className="contact-point">
            <motion.h2 variants={titleDot}>●</motion.h2>
          </div>
          <motion.div className="email-box" variants={fade}>
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
          </motion.div>
          <motion.div className="email-box" variants={fade}>
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
          </motion.div>
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
    margin-bottom: 15vh;
  }
  .contact-intro {
    padding-left: 5rem;
    flex: 1 1 50%;
    display: flex;
    flex-direction: column;
  }
  .contact-title {
    flex: 1 1 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    h4 {
      width: 50%;
      font-size: 1rem;
      margin-top: 3rem;
    }
  }
  .contact-box {
    flex: 1 1 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    padding-top: 20%;
  }
  .contact-point {
    flex: 1 1 35%;
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
  }
  .contact-email {
    padding-bottom: 5rem;
    h2 {
      padding-bottom: 3rem;
      font-size: 2rem;
    }
    a {
      font-size: 1.8rem;
      text-decoration: none;
      color: ${({ theme }) => theme.text};
    }

    a:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 890px) {
    flex-direction: column;
    .contact-hero {
      img {
        width: 100%;
      }
      margin-bottom: 5vh;
    }
    .contact-intro {
      padding-left: 0rem;
    }
    .contact-title {
      h1 {
        font-size: 3rem;
      }
    }
    .contact-point {
      flex: 1 1 20%;
      h2 {
        font-size: 3rem;
      }
    }
  }
`;

export default ContactIntro;

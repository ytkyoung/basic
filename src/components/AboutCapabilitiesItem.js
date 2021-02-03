import { motion } from 'framer-motion';
import { fade } from '../animation';
import { useScroll } from './useScroll';

const AboutCapabilitiesItem = (props) => {
  const listItems = props.test.map((number, index) => (
    <li key={index}>{number}</li>
  ));
  const [element, controls] = useScroll();
  return (
    <>
      <motion.div
        className="capa-card"
        variants={fade}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <div className="capa-card-title">
          <h2>{props.capa.title}</h2>
        </div>
        <div className="capa-card-list">
          <ul>{listItems}</ul>
        </div>
      </motion.div>
    </>
  );
};

export default AboutCapabilitiesItem;

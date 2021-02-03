import { motion } from 'framer-motion';
import { photoAnim } from '../animation';
import { useScroll } from './useScroll';

const AboutSnapshotItem = (props) => {
  const [element, controls] = useScroll();
  return (
    <>
      <motion.div
        className="snap-card"
        variants={photoAnim}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <div className="snap-card-title">
          <h2>{props.shot.title}</h2>
        </div>
        <div className="snap-card-stat">
          <h1>
            {props.shot.stat}
            {props.shot.unit}
          </h1>
          <div className="snap-card-text">
            <p>{props.shot.text}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutSnapshotItem;

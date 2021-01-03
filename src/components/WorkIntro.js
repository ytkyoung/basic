import { Intro } from '../styles.js';
import { motion } from 'framer-motion';

const WorkIntro = () => {
  return (
    <>
      <Intro>
        <div>
          <motion.h1
            initial={{ y: -550 }}
            animate={{ y: -10 }}
            transition={{ delay: 0.3, duration: 0.3, type: 'tween' }}
          >
            EASY TO UNDERSTAND.
            <br />
            ●IMPOSSIBLE
            <br />
            TO IGNORE.
          </motion.h1>
        </div>
        <div className="work-intro-title-part2">
          <p>
            The work we create lives at the intersection of clarity and surprise
            and positions brands in culture through shared values and ideals.
          </p>
        </div>
      </Intro>
    </>
  );
};

export default WorkIntro;

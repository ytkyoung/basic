import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.6 });
  console.log(view);
  if (view) {
    controls.start('show');
    console.log('show');
  } else {
    controls.start('hidden');
    console.log('hidden');
  }
  return [element, controls];
};

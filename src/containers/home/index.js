import '@fontsource/caveat';
import React from 'react';

import Section from '../../components/landing/Section';
import HotNote from '../../components/landing/HotNote';
import Features from '../../components/landing/Features';
import Hero from '../../components/landing/Hero';

function Home() {
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  return (
    <>
      <Hero />
      <HotNote />
      <Features />
      <Section />
    </>
  );
}

export default Home;

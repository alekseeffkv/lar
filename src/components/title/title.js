import './title.scss';

import { useState, useEffect } from 'react';
import { animated, useTransition } from '@react-spring/web';

const langs = ['english', 'spanish', 'chineese', 'french', 'german'];

const Title = () => {
  const [index, setIndex] = useState(0);

  const transitions = useTransition(langs[index], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((state) => (state + 1) % langs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="title">
      Learn&nbsp;
      {transitions((style, lang) => (
        <animated.span style={{ ...style, position: 'absolute' }}>
          {lang}
        </animated.span>
      ))}
      <br />
      using any YouTube video
      <br />
      <span className="title__free">for free!</span>
    </h1>
  );
};

export default Title;

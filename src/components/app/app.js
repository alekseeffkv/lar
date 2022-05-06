/* eslint-disable jsx-a11y/anchor-is-valid */
import './app.scss';

import Title from '../title';
import Button from '../button';
import Carousel from '../carousel';

import { ReactComponent as LogoIcon } from './logo.svg';

const App = () => {
  const lang = 'english';

  return (
    <div className="app container">
      <a href="#" className="app__logo">
        <LogoIcon />
      </a>

      <Title lang={lang} />

      <div className="app__description">
        Access to subtitles in a foreign language, save and review new words and
        phrases, quick dictionary lookup
      </div>

      <Button />

      <Carousel />

      <a href="#" className="app__privacy">
        Privacy Policy
      </a>
    </div>
  );
};

export default App;

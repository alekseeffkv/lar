import './button.scss';

import { ReactComponent as ChromeIcon } from './chrome.svg';

const Button = ({ ...props }) => {
  return (
    <button type="button" className="button" {...props}>
      <div className="button__inner">
        <ChromeIcon />
        <span className="button__title">Install for free</span>
      </div>
    </button>
  );
};

export default Button;

import cn from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Arrow = ({ className, style, onClick, prev = false, next = false }) => {
  return (
    <div
      className={cn(className, 'carousel__arrow', {
        carousel__arrow_prev: prev,
        carousel__arrow_next: next,
      })}
      style={{ ...style }}
      onClick={onClick}
    >
      {prev && <FontAwesomeIcon icon={faArrowLeft} />}
      {next && <FontAwesomeIcon icon={faArrowRight} />}
    </div>
  );
};

export default Arrow;

import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';

const Cryptlist = ({ coin, arrowClick }) => {
  const {
    name, image,
    /* eslint-disable-next-line */
    trust_score_rank, url, id,
  } = coin;

  return (
    <section className="each-coin">
      <div className="coins-each">
        <div>
          <img src={image} alt={name} />
        </div>
        <div>
          <p className="center">
            Ranked at #
            {/* eslint-disable-next-line */}
            {trust_score_rank}
          </p>
          <h1 className="center break">{name}</h1>
          <a className="url" href={url}>{name}</a>
        </div>
        <div>
          <button type="button" className="pointer" onClick={() => (arrowClick(id))} id="icon" title="icon">
            <BsArrowRightCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

Cryptlist.propTypes = {
  coin: PropTypes.oneOfType([PropTypes.array]).isRequired,
  arrowClick: PropTypes.func.isRequired,
};

export default Cryptlist;

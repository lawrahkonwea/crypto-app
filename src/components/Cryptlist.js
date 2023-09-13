import React from 'react';
import PropTypes from 'prop-types';

const Cryptlist = ({ coin, arrowClick }) => {
  const {
    name, image,
    /* eslint-disable-next-line */
    trust_score_rank, url, id,
  } = coin;

  return (
    <>
    <section className="each-coin" onClick={() => (arrowClick(id))} id="icon" title="icon">
      <div className="coins-each">
        <div>
          <img className="img-holder" src={image} alt={name} />
        </div>
        <div>
          <h1 className="center break">{name}</h1>
          <a className="url" href={url}>{name}</a>
        </div>
        <div>
        </div>
      </div>
    </section>
    </>
  );
};

Cryptlist.propTypes = {
  coin: PropTypes.oneOfType([PropTypes.array]).isRequired,
  arrowClick: PropTypes.func.isRequired,
};

export default Cryptlist;

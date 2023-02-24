import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
/* eslint-disable-next-line */
const Details = () => {
  const location = useLocation();
  if (location.state) {
    const {
      name, image, description, country,
      // eslint-disable-next-line 
      year_established,
      trust_score_rank, trade_volume_24h_btc,
    } = location.state;

    return (
      <div className="details">
        <button type="button">
          <Link className="back-arrow" to="/"><BsFillArrowLeftCircleFill /></Link>
        </button>
        <div className="header-detail">
          <img className="img-detail" src={image} alt={name} />
        </div>
        <table>
          <caption>{name}</caption>
          <tbody>
            <tr>
              <p>country origin:</p>
              <p className="desc-color">
                {
                  country ? (
                    <p className="desc-color">

                      <span>{country}</span>
                    </p>
                  ) : ''
                }
              </p>
            </tr>
            <tr>
              <p>
                {
               description ? (
                 <p>
                   Description:
                   <span>{description}</span>
                 </p>
               ) : 'No Description'
            }
              </p>
            </tr>
            <tr>
            {/* eslint-disable-next-line */}
              <p>Ranked at</p>
              <span>
                #
                {trust_score_rank}
              </span>
            </tr>
            <tr>
              {/* eslint-disable-next-line */}
              <p>Trade volume 24h btc:</p>
              <span>{trade_volume_24h_btc}</span>
            </tr>
            <tr>
              {/* eslint-disable-next-line */}
              <p>Year Established:</p>
              <p>

                {
              year_established ? (
                <p>

                  <span>{year_established}</span>
                </p>
              ) : ''
            }
              </p>
            </tr>
          </tbody>
        </table>
      </div>

    );
  }
};

export default Details;

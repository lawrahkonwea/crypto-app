import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './DetailsHeader';
/* eslint-disable-next-line */
const Details = () => {
  const location = useLocation();
  if (location.state) {
    const {
      // eslint-disable-next-line
      name, image, url, description, country, year_established, trust_score_rank, trade_volume_24h_btc,
    } = location.state;

    return (
      <>
      <Header />
      <div className="details">
        <div className="header-detail">
          <img className="img-detail" src={image} alt={name} />
        </div>
        <table>
          <caption><a className="url" href={url}>{name}</a></caption>
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
              <p>Ranked at</p>
              <span>
                #
                {/* eslint-disable-next-line */}
                {trust_score_rank}
              </span>
            </tr>
            <tr>
              <p>Trade volume 24h btc:</p>
              {/* eslint-disable-next-line */}
              <span>{trade_volume_24h_btc}</span>
            </tr>
            <tr>
              <p>Year Established:</p>
              <p>

                {
                  // eslint-disable-next-line
                  year_established ? (
                    <p>
                      {/* eslint-disable-next-line */}
                      <span>{year_established}</span>
                    </p>
                  ) : ''
                }
              </p>
            </tr>
          </tbody>
        </table>
      </div>
      </>
    );
  }
};

export default Details;

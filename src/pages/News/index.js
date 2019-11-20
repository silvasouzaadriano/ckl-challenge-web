import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import api from '~/services/api';

import { NewsList, Teste } from './styles';

export default function News({ match }) {
  const [newslist, setNews] = useState([]);

  const interestId = useMemo(
    () => ({
      value: match.params.id,
    }),
    [match.params.id]
  );

  useEffect(() => {
    async function loadNews() {
      const interestColor = [
        { name: 'POLITICS', color: '#d0021b' },
        { name: 'BUSINESS', color: '#bd10e0' },
        { name: 'TECH', color: '#4a90e2' },
        { name: 'SCIENCE', color: '#7cbb37' },
        { name: 'SPORTS', color: '#f5a623' },
      ];

      const response = await api.get('news', {
        params: { interest_id: interestId.value },
      });

      const data = response.data.map(news => ({
        ...news,
        interestColor: interestColor.find(
          interest => interest.name === news.interest.name
        ),
      }));

      setNews(data);
    }
    loadNews();
  }, [interestId]);

  return (
    <>
      <NewsList>
        {newslist.map(news => (
          <li key={news.id}>
            <span className="interest">
              <p>
                <font color={news.interestColor.color}>
                  {news.interest.name}
                </font>
              </p>
            </span>

            <span className="banner">
              <p>
                {news.banner ? (
                  <>
                    <figure className="picture-legend">
                      <img
                        src={news.banner.url.replace(
                          'localhost',
                          '167.172.254.115'
                        )}
                        alt={news.title}
                      />
                      <figcaption>
                        <h3>Read More</h3>
                      </figcaption>
                    </figure>
                  </>
                ) : null}
              </p>
            </span>

            <span className="title">{news.title}</span>

            <span className="owner">
              {news.ownerbanner ? (
                <img src={news.ownerbanner.url} alt={news.owner} />
              ) : null}
              <span>by {news.owner}</span>
            </span>

            <span className="description">{news.description}</span>
          </li>
        ))}
      </NewsList>
    </>
  );
}

News.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

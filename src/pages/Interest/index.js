import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Form } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Container } from './styles';
// import AuthLayout from '~/pages/_layouts/auth';

import api from '~/services/api';
import history from '~/services/history';

export default function Interest() {
  // const Layout = AuthLayout;
  const [interests, setInterests] = useState([]);
  const interestIds = [1, 2, 3, 4, 5];

  const profile = useSelector(state => state.user.profile);

  useEffect(() => {
    async function loadInterests() {
      const interestColor = [
        { name: 'POLITICS', color: '#d0021b' },
        { name: 'BUSINESS', color: '#bd10e0' },
        { name: 'TECH', color: '#4a90e2' },
        { name: 'SCIENCE', color: '#7cbb37' },
        { name: 'SPORTS', color: '#f5a623' },
      ];
      const response = await api.get('interests');
      const data = response.data.map(i => ({
        ...i,
        interestColor: interestColor.find(interest => interest.name === i.name),
      }));

      setInterests(data);
    }
    loadInterests();
  }, []);

  async function handleSubmit() {
    for (let i = 0; i < interestIds.length; i++) {
      const response = await api.post('userinterests', {
        user_id: profile.id,
        interest_id: interestIds[i],
      });
    }

    history.push('/');
  }

  function changeColor() {
    console.tron.log('Muda cor');
  }
  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <p className="welcome">
            WELCOME, <span>{profile.name}</span>
          </p>

          <p className="interest">MY INTERESTS</p>

          {interests.length > 0 ? (
            <ul
              id="ms_imp_list"
              tabIndex="0"
              role="listbox"
              aria-labelledby="ms_av_l"
              aria-multiselectable="true"
            >
              {interests.map(interest => (
                <li
                  className={`li-${interest.id}`}
                  key={String(interest.id)}
                  onClick={changeColor}
                >
                  <font color={interest.interestColor.color}>
                    {interest.name}
                  </font>
                </li>
              ))}
            </ul>
          ) : (
            <ul
              id="ms_imp_list"
              tabIndex="0"
              role="listbox"
              aria-labelledby="ms_av_l"
              aria-multiselectable="true"
            >
              <li className="li-1" role="option" aria-selected="false">
                POLITICS
              </li>
              <li className="li-2" role="option" aria-selected="false">
                BUSINESS
              </li>
              <li className="li-3" role="option" aria-selected="false">
                TECH
              </li>
              <li className="li-4" role="option" aria-selected="false">
                SCIENCE
              </li>
              <li className="li-5" role="option" aria-selected="false">
                SPORTS
              </li>
            </ul>
          )}

          <p className="button">
            <button type="submit">SAVE</button>
          </p>

          <p className="back">
            <Link to="/">BACK TO HOME</Link>
          </p>
        </Form>
      </Container>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '~/services/api';
import history from '~/services/history';
import { signOut } from '~/store/modules/auth/actions';

import Logo from '~/assets/logo.png';

import { Container, Content } from './styles';

export default function Header() {
  const [interests, setInterests] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadInterests() {
      const response = await api.get('interests');
      const data = response.data.map(i => ({
        ...i,
      }));
      setInterests(data);
    }
    loadInterests();
  }, []);

  function handleSignOut() {
    dispatch(signOut());
  }

  function clearUrlHistory() {
    history.replace('/');
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={Logo} alt="Logo News" />
          </Link>
        </nav>
        <aside>
          {interests.length > 0 ? (
            <ul>
              {interests.map(interest => (
                <Link
                  to={`news/${interest.id}`}
                  key={String(interest.id)}
                  onClick={clearUrlHistory}
                >
                  <li>{interest.name}</li>
                </Link>
              ))}
            </ul>
          ) : (
            <ul>
              <Link to="/">
                <li>POLITICS</li>
              </Link>
              <Link to="/">
                <li>BUSINESS</li>
              </Link>
              <Link to="/">
                <li>TECH</li>
              </Link>
              <Link to="/">
                <li>SCIENCE</li>
              </Link>
              <Link to="/">
                <li>SPORTS</li>
              </Link>
            </ul>
          )}

          <span>
            <ul>
              <Link to="/">
                <li>LOGIN</li>
              </Link>
            </ul>
          </span>
        </aside>
      </Content>
    </Container>
  );
}

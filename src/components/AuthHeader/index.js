import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import News from '~/assets/menu.png';
import Logo from '~/assets/logo.png';

import { Container, Content } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <aside>
          <nav>
            <Link to="/">
              <img src={News} alt="News" />
            </Link>
          </nav>
        </aside>
        <aside>
          <nav>
            <button type="button" onClick={handleSignOut}>
              <img src={Logo} alt="Logo" />
            </button>
          </nav>
        </aside>
      </Content>
    </Container>
  );
}

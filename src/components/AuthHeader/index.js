import React from 'react';

import { Link } from 'react-router-dom';

import News from '~/assets/menu.png';
import Logo from '~/assets/logo.png';

import { Container, Content } from './styles';

export default function Header() {
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
            <Link to="/">
              <img src={Logo} alt="News" />
            </Link>
          </nav>
        </aside>
      </Content>
    </Container>
  );
}

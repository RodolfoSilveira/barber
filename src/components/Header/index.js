import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/header.svg';
import {Container, Content, Profile} from './styles';
import Notifications from '~/components/Notifications';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="logo" />
          <Link to="/dashboard">dashboard</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Rodolfo Silveira</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.io.png"
              alt="Rodolfo Silveira"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

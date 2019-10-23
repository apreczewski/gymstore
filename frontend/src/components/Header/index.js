import React from 'react';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-purple.svg';
import { Container, Content, Profile } from './styles';

import Search from './Search';
import Toggle from './Toggle';

export default function Header() {
  // const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/custumer">Custumer</Link>
          <Link to="/financial">Financial</Link>
        </nav>
        <Search />
        <Toggle />
        <aside>
          {/* <Notifications /> */}
          <Profile>
            <div>
              <strong>{/* {profile.name} */}</strong>
            </div>
            <Link to="/profile">
              <img
                src="https://api.adorable.io/avatars/50/abott@adorable.png"
                alt="Diego Fernandes"
              />
            </Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

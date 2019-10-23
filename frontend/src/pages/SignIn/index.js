import React, { useState } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import uiConfig from '~/services/auth';
import { Content } from './styles';

export default function SignIn({ history }) {
  const [token, setToken] = useState(null);

  // useEffect(() => {
  //

  //   loadUser();
  // }, [history, token]);
  async function loadUser() {
    await firebase.auth().onAuthStateChanged(userAuth => {
      if (userAuth) {
        setToken(userAuth.getIdToken());
        localStorage.setItem('app', userAuth);
      }
    });
    // history.push('/dashboard');
  }

  async function signOut() {
    await firebase.auth().signOut();
    localStorage.clear();
    setToken(null);
  }

  return (
    <Content>
      <a onClick={() => signOut}>Sign-out</a>
      <StyledFirebaseAuth
        className="login-input"
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
        onClick={() => loadUser}
      />
    </Content>
  );
}

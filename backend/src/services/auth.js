import firebase from 'firebase';
import credentialfirebase from '../credentials/firebase.json';

const config = {
  apiKey: credentialfirebase.apiKey,
  authDomain: credentialfirebase.authDomain,
  databaseURL: credentialfirebase.databaseURL,
  storegeBucket: credentialfirebase.storegeBucket,
};

firebase.initializeApp(config);

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/signedIn',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccess: () => false,
  },
};

export default uiConfig;

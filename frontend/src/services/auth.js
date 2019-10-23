import firebase from 'firebase';
import { config } from '~/services/firebaseConfig';

firebase.initializeApp(config);

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

export default uiConfig;

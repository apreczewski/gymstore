import React from 'react';
import firebase from 'firebase';
// import Modal from '../../components/Modal';
// import './Dashboard.css';

export default function Dashboard() {
  // const [show, setShow] = useState(false);

  async function signOut() {
    await firebase.auth().signOut();
    localStorage.clear();
  }

  return (
    <>
      <button type="button" onClick={() => signOut}>
        signOut
      </button>
    </>
  );
}

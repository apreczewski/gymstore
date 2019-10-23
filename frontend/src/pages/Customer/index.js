import React, { useState, useEffect } from 'react';

import { Row, Col, Card, CardHeader, CardBody } from 'shards-react';

import firebase from 'firebase';
import HeaderTable from './HeaderTable';
import { Content } from './styles';

export default function Customer() {
  const [itens, setItens] = useState([]);
  const [users, setUsers] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    async function loadUsers() {
      const database = await firebase
        .database()
        .ref()
        .child('users');

      database.on('value', snap => {
        localStorage.setItem('users', snap.val());
        setUsers(snap.val());
      });
    }

    loadUsers();
  }, [users]);

  async function handleChange(event) {
    setFilterText(event.target.value);

    setItens(
      await users.filter(user => {
        return (
          user.full_name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        );
      })
    );
  }

  return (
    <Content>
      <Row noGutters>
        <HeaderTable
          inputPlaceHolder="Search Name"
          value={filterText}
          onChange={event => handleChange(event)}
        />
      </Row>

      <Row>
        <Col>
          <Card small>
            <CardHeader> List Users </CardHeader>
            <CardBody>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">CPF</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Birthday</th>
                  </tr>
                </thead>
                <tbody>
                  {filterText
                    ? itens.map((user, index) => (
                        <tr key={index}>
                          <td align="center">{index}</td>
                          <td>{user.cpf}</td>
                          <td>{user.full_name}</td>
                          <td>{user.phone}</td>
                          <td>{user.birthday}</td>
                        </tr>
                      ))
                    : users.map((user, index) => (
                        <tr key={index}>
                          <td align="center">{index}</td>
                          <td>{user.cpf}</td>
                          <td>{user.full_name}</td>
                          <td>{user.phone}</td>
                          <td>{user.birthday}</td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Content>
  );
}

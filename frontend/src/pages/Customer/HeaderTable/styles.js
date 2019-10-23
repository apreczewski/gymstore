import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px 0 10px 0;
  height: 42px;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;

  input {
    height: 100%;
    min-width: 85%;
    margin-right: 10px;
  }

  button {
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    border: none;

    i {
      margin-right: 3px;
    }
    :hover {
      background: #ad3618;
    }
  }
`;

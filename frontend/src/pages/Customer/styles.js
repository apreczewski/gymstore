import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;

  input {
    width: 100%;
  }

  tbody {
    tr {
      a {
        :hover {
          cursor: pointer;
        }
      }

      :hover {
        cursor: pointer;
        background: rgba(201, 75, 39, 0.3);
      }
    }
  }
`;

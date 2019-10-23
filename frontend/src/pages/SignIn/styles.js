import styled from 'styled-components';

import { Container } from 'shards-react';

export const Content = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  justify-content: center;
  align-items: center;

  strong {
    background: rgba(0, 0, 0, 0.8) ;
    color: #04394c;
    padding: 6px 25px;
    border-radius: 9px;
    font-size: 25px;
  }

  button {
    background: rgba(0, 0, 0, 0.8) !important;
    border-radius: 9px;
    min-width: 230px;
  }
`;

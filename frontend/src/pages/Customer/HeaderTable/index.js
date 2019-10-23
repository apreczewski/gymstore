import React from 'react';
import PropTypes from 'prop-types';
import { FormInput, Button } from 'shards-react';

import { MdPersonAdd } from 'react-icons/md';
import { Container } from './styles';

export default function Title({ inputPlaceHolder, value, onChange, ...attrs }) {
  return (
    <Container {...attrs}>
      <FormInput
        placeholder={inputPlaceHolder}
        value={value}
        onChange={onChange}
      />
      <Button pill size="sm">
        <i>
          <MdPersonAdd />
        </i>{' '}
        <span>New</span>
      </Button>
    </Container>
  );
}

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

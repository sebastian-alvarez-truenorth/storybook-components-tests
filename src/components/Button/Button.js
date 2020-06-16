import React from 'react';

import Wrapper from './style';

const Button = ({ label, disabled = false, handleClick = null }) => (
  <Wrapper disabled={disabled} onClick={handleClick}>
    { label }
  </Wrapper>
);

export default Button;

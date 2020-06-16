import styled from 'styled-components';

const Wrapper = styled.button`
  border: none;
  background-color: #05b0af;
  width: 240px;
  height: 120px;
  color: white;
  font-size: 50px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #aabdbd;
  }
`;

export default Wrapper;

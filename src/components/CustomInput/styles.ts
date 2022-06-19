import styled from 'styled-components';
import colors from '../../styles/colors';

export const Input = styled.input`
  padding: 0.45rem;
  margin: 0.20rem 0px;
  border: none;
  border-radius: 4px;
  width: 20rem;

  &:not(:valid)::-webkit-datetime-edit {
    color: gray;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px ${colors.darkBlue};
  }
`;



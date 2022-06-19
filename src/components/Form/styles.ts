import styled from 'styled-components';
import colors from '../../styles/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Button = styled.button`
  padding: 0.65em;
  border: none;
  border-radius: 4px;
  background-color: ${colors.darkBlue};
  font-weight: bold;
  font-size: 1rem;
  color: ${colors.white};
  transition: 0.2s;

  &:hover {
    filter: brightness(90%);
  }


`


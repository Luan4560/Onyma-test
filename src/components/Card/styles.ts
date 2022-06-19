import styled from 'styled-components';

export const Container = styled.div`
  color: #222;
  width: 25;
  border-radius: 4px;
  background: #fff;
  padding: 1.5rem;
  margin: 1rem auto;

  -webkit-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
  text-align: justify;

  .endereço {
    margin-top: 1rem;
    font-weight: bold;
    font-size: 1rem;
  }

  p{
    font-size: 0.75rem;
  }

  span {
    font-weight: bold;
  }
`

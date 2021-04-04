import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 40px;
  max-width: 150px;
  width: auto;
  border-radius: 20px;
  border: none;
  background-color: hsl(45, 98%, 64%);
  color: hsl(227, 11%, 16%);
  font-weight: ${({ theme }) => theme.font.weight.bold};
  cursor: pointer;
  outline: none;
  text-decoration: none;
`;

export default Button;

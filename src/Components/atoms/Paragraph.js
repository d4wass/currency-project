import styled from 'styled-components';

const Paragraph = styled.p`
  color: hsl(0 0% 100%);
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.font.weight.light};
  letter-spacing: 0.1em;
`;

export default Paragraph;

import styled from 'styled-components';

const NavItem = styled.li`
  padding: 10px 20px;
  font-size: 1.4rem;
  /* letter-spacing: 0.1rem; */
  font-weight: ${({ theme }) => theme.font.weight.semi};
  color: ${({ theme }) => theme.color.grey};
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.grey};
    border-radius: 13px;
  }
`;

export default NavItem;

import styled from 'styled-components';

export const Layout = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(6)};
`;

import styled from 'styled-components';

export const FriendsListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};
`;

export const FriendsItemStyle = styled.li`
  width: 300px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  // gap: ${props => props.theme.spacing(11)};

  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

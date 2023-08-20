import styled from 'styled-components';

export const StatsUserList = styled.ul`
  width: 100%;
  height: 65px;
  background-color: #1418141c;
  display: flex;
  justify-content: center;
  align-items: center;
  // gap: ${props => props.theme.spacing(8)};
  border-top: 1px solid #00000047;
`;

export const StatsUserListItem = styled.li`
  flex-basis: calc(100% / 3);
  width: 70px;
  height: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing(2)};

  &:nth-child(2) {
    border-right: 1px solid #00000047;
    border-left: 1px solid #00000047;
  }
`;

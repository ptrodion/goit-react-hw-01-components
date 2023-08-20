import styled from 'styled-components';

export const StatisticsListStyle = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top: 1px solid #00000047;
`;

export const StatisticsItemStyle = styled.li`
  flex-basis: calc(100% / 5);
  background-color: ${props => props.bkgColor};
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4) {
    border-right: 1px solid #00000047;
    border-left: 1px solid #00000047;
  }
`;

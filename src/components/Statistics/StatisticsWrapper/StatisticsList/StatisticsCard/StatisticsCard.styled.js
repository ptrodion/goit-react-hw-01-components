import styled from 'styled-components';

export const StatisticsCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};
  color: #ffffffd9;
`;

export const StatisticsCardPercentage = styled.p`
  font-size: 24px;
`;

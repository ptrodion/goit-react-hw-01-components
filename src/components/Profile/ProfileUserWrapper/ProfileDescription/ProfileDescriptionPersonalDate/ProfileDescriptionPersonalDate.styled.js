import styled from 'styled-components';

export const DescriptionPersonalUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};
`;

export const DescriptionPersonalUserName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const DescriptionPersonaAllDates = styled.p`
  opacity: 0.6;
  font-size: 14px;
`;

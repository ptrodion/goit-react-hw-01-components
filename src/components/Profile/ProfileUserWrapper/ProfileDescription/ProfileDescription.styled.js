import styled from 'styled-components';

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing(8)};
`;

export const DescriptionImg = styled.img`
  border-radius: 50%;
`;

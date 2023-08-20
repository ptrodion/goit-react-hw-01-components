import styled from 'styled-components';

export const SectionWrapper = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionText = styled.p`
  font-size: 36px;
  color: #2a00ff;
  margin-bottom: ${props => props.theme.spacing(8)};
`;

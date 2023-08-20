import styled from 'styled-components';

export const ProfileUserWrapperStyle = styled.div`
  width: 80%;
  height: 350px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: ${props => props.theme.spacing(14)};
}`;

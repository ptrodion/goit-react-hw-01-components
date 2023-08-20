import PropTypes from 'prop-types';

import { ProfilePersonalDate } from './ProfileDescriptionPersonalDate/ProfileDescriptionPersonalDate.js';
import defaultProfile from './defaultProfile.png';

import {
  DescriptionImg,
  DescriptionWrapper,
} from './ProfileDescription.styled';

export const ProfileDescription = ({
  userDates: { avatar = defaultProfile, ...personalDates },
}) => {
  return (
    <DescriptionWrapper>
      <DescriptionImg src={avatar} alt="User avatar" width="80" />
      <ProfilePersonalDate personalDates={personalDates}></ProfilePersonalDate>
    </DescriptionWrapper>
  );
};

ProfileDescription.propTypes = {
  userDates: PropTypes.shape({
    avatar: PropTypes.string,
  }).isRequired,
};

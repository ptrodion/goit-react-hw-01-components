import PropTypes from 'prop-types';
import {
  DescriptionPersonalUserWrapper,
  DescriptionPersonalUserName,
  DescriptionPersonaAllDates,
} from './ProfileDescriptionPersonalDate.styled';

export const ProfilePersonalDate = ({
  personalDates: { username, tag, location },
}) => {
  return (
    <DescriptionPersonalUserWrapper>
      <DescriptionPersonalUserName>{username}</DescriptionPersonalUserName>
      <DescriptionPersonaAllDates>
        <span>@</span>
        {tag}
      </DescriptionPersonaAllDates>
      <DescriptionPersonaAllDates>{location}</DescriptionPersonaAllDates>
    </DescriptionPersonalUserWrapper>
  );
};

ProfilePersonalDate.propTypes = {
  personalDates: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

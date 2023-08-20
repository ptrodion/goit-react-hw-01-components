import PropTypes from 'prop-types';
import { StatsUserList, StatsUserListItem } from './ProfileStats.styled';
import {
  DescriptionPersonaAllDates,
  DescriptionPersonalUserName,
} from '../ProfileDescription/ProfileDescriptionPersonalDate/ProfileDescriptionPersonalDate.styled';

export const StatsUser = ({ userStates }) => {
  return (
    <StatsUserList>
      <StatsUserListItem>
        <DescriptionPersonaAllDates>Followers</DescriptionPersonaAllDates>
        <DescriptionPersonalUserName>
          {userStates.followers}
        </DescriptionPersonalUserName>
      </StatsUserListItem>
      <StatsUserListItem>
        <DescriptionPersonaAllDates>Views</DescriptionPersonaAllDates>
        <DescriptionPersonalUserName>
          {userStates.views}
        </DescriptionPersonalUserName>
      </StatsUserListItem>
      <StatsUserListItem>
        <DescriptionPersonaAllDates>Likes</DescriptionPersonaAllDates>
        <DescriptionPersonalUserName>
          {userStates.likes}
        </DescriptionPersonalUserName>
      </StatsUserListItem>
    </StatsUserList>
  );
};

StatsUser.propTypes = {
  userStates: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

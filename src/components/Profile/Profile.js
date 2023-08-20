import { ProfileUserWrapper } from './ProfileUserWrapper/ProfileUserWrapper';
import { ProfileDescription } from './ProfileUserWrapper/ProfileDescription/ProfileDescription.js';
import { StatsUser } from './ProfileUserWrapper/ProfileStats/ProfileStats';

import { ProfileWrapper } from './Profile.styled';
import user from './user.json';

export const Profile = () => {
  return (
    <ProfileWrapper>
      <ProfileUserWrapper>
        <ProfileDescription userDates={user} />
        <StatsUser userStates={user.stats} />
      </ProfileUserWrapper>
    </ProfileWrapper>
  );
};

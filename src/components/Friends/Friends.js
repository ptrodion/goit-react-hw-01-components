import { FriendsStyle } from './Friends.styled';
import { FriendsList } from './FriendsWrapper/FriendsList/FriendList';
import { FriendsWrapperStyle } from './FriendsWrapper/FriendsWrapper.styled';

import dates from './friends.json';

export const Friends = () => {
  return (
    <FriendsStyle>
      <FriendsWrapperStyle>
        <FriendsList items={dates} />
      </FriendsWrapperStyle>
    </FriendsStyle>
  );
};

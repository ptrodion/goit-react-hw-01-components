import PropTypes from 'prop-types';

import { FriendsListStyle, FriendsItemStyle } from './FriendList.style';
import { FriendsCard } from './FriendsCard/FriendsCard';

export const FriendsList = ({ items }) => {
  return (
    <FriendsListStyle>
      {items.map(item => (
        <FriendsItemStyle key={item.id}>
          <FriendsCard cardDates={item} />
        </FriendsItemStyle>
      ))}
    </FriendsListStyle>
  );
};

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

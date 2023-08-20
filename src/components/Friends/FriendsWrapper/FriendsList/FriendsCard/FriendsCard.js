import PropTypes from 'prop-types';
import { FiCircle } from 'react-icons/fi';

export const FriendsCard = ({ cardDates: { avatar, name, isOnline } }) => {
  return (
    <>
      {isOnline ? <FiCircle fill="green" /> : <FiCircle fill="red" />}
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </>
  );
};

FriendsCard.propTypes = {
  cardDates: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

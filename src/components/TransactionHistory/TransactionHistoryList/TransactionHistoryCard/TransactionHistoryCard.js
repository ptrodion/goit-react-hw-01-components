import PropTypes from 'prop-types';
import { StyledTD } from './TransactionHistoryCard.styled';

export const TransactionHistoryCard = ({
  dates: { type, amount, currency },
}) => {
  return (
    <>
      <StyledTD>{type}</StyledTD>
      <StyledTD>{amount}</StyledTD>
      <StyledTD>{currency}</StyledTD>
    </>
  );
};

TransactionHistoryCard.propTypes = {
  dates: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};

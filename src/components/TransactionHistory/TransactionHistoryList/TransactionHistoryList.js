import PropTypes from 'prop-types';

import { TransactionHistoryCard } from './TransactionHistoryCard/TransactionHistoryCard';
import { StyledEvenTR, StyledOddTR } from './TransactionHistoryList.styled';

export const TransactionHistoryList = ({ dates }) => {
  return (
    <tbody>
      {dates.map((data, index) =>
        index % 2 === 0 ? (
          <StyledEvenTR key={data.id}>
            <TransactionHistoryCard dates={data} />
          </StyledEvenTR>
        ) : (
          <StyledOddTR key={data.id}>
            <TransactionHistoryCard dates={data} />
          </StyledOddTR>
        )
      )}
    </tbody>
  );
};

TransactionHistoryList.propTypes = {
  dates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

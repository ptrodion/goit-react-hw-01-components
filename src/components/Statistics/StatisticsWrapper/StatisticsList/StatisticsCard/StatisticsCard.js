import PropTypes from 'prop-types';
import {
  StatisticsCardWrapper,
  StatisticsCardPercentage,
} from './StatisticsCard.styled';

export const StatisticsCard = ({ cardDates: { label, percentage } }) => {
  return (
    <StatisticsCardWrapper>
      <p>{label}</p>
      <StatisticsCardPercentage>{percentage}%</StatisticsCardPercentage>
    </StatisticsCardWrapper>
  );
};

StatisticsCard.propTypes = {
  cardDates: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};

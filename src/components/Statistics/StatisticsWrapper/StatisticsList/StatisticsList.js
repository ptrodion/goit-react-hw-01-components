import PropTypes from 'prop-types';

import {
  StatisticsListStyle,
  StatisticsItemStyle,
} from './StatisticsList.styled';
import { StatisticsCard } from './StatisticsCard/StatisticsCard';

export const StatisticsList = ({ items }) => {
  return (
    <StatisticsListStyle>
      {items.map(item => (
        <StatisticsItemStyle key={item.id} bkgColor={getRandomHexColor()}>
          <StatisticsCard cardDates={item} />
        </StatisticsItemStyle>
      ))}
    </StatisticsListStyle>
  );
};

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

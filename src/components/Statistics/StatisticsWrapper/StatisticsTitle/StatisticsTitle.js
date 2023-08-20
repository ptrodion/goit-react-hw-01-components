import PropTypes from 'prop-types';
import { StatisticsTitleStyle } from './StatisticsTitle.styled';

export const StatisticsTitle = ({ title }) => {
  if (!title) {
    return null;
  }
  return <StatisticsTitleStyle>{title}</StatisticsTitleStyle>;
};

StatisticsTitle.propTypes = {
  title: PropTypes.string,
};

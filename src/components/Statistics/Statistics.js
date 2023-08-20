import { StatisticsList } from './StatisticsWrapper/StatisticsList/StatisticsList';
import { StatisticsTitle } from './StatisticsWrapper/StatisticsTitle/StatisticsTitle';
import { StatisticsWrapper } from './StatisticsWrapper/StatisticsWrapper';
import { StatisticsStyle } from './Statistics.styled';

import dates from './data.json';

export const Statistics = () => {
  return (
    <StatisticsStyle>
      <StatisticsWrapper>
        <StatisticsTitle title="Upload stats" />
        <StatisticsList items={dates} />
      </StatisticsWrapper>
    </StatisticsStyle>
  );
};

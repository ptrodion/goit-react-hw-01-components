import { Section } from 'components/Section/Section';
import { Profile } from './Profile/Profile';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Statistics } from './Statistics/Statistics';
import { Friends } from './Friends/Friends';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Layout>
      <Section title="Profile">
        <Profile />
      </Section>
      <Section title="Statistics">
        <Statistics />
      </Section>
      <Section title="FriendList">
        <Friends />
      </Section>
      <Section title="Transaction history">
        <TransactionHistory />
      </Section>
      <GlobalStyle />
    </Layout>
  );
};

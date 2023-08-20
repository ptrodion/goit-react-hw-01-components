import { Section } from 'components/Section/Section';
import { Profile } from './Profile/Profile';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <Section title="Profile">
        <Profile />
      </Section>
      <Section title="Statistics"></Section>
      <Section title="FriendList"></Section>
      <Section title="Transaction history"></Section>
      <GlobalStyle />
    </Layout>
  );
};

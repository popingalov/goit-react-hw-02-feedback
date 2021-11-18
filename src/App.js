import Profile from 'Components/Profile/Profile';
import user from './mass/user.json';
import data from './mass/data.json';
import friends from 'mass/friends.json';
import transactions from 'mass/transactions.json';
import Transactions from './Components/TransactionHistory/TransactionHistory';
import Statistics from './Components/statistics/Statistics';
import Container from 'Components/Container/Container';
import FriendList from 'Components/FriendList/FriendList';

export default function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <Statistics stats={data} title="Upload stats" />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </Container>
  );
}

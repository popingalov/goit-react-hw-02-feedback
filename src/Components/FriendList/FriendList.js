import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      <FriendListItem friends={friends} />
    </ul>
  );
}

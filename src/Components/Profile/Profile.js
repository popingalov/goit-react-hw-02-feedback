import PropTypes from 'prop-types';
import s from './Profile.module.css';
import defaultFoto from './defaultFoto.png';
export default function Profile({
  username,
  tag,
  location,
  avatar = defaultFoto,
  stats,
}) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className="label">Followers:</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views:</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes:</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    likes: PropTypes.number,
    views: PropTypes.number,
  }),
  tag: PropTypes.string,
  username: PropTypes.string,
};

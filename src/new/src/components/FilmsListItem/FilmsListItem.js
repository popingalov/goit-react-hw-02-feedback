import PropTypes from 'prop-types';
import { Title } from './FilmsListItem.styled';
import { Label } from '../Overlay/Overlay.styled';

const FilmsListItem = ({
  id,
  title,
  img,
  isWatched,
  onClick,
  text,
  onStatusClick,
}) => (
  <>
    <img src={`https://image.tmdb.org/t/p/w400/${img}`} alt={title} />
    <Title>{title}</Title>
    <button type="button" onClick={() => onClick(text)}>
      Read overview
    </button>
    <p onClick={() => onStatusClick(id)}>
      Is movie watched: <Label>{`${isWatched}`}</Label>
    </p>
  </>
);

FilmsListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isWatched: PropTypes.bool.isRequired,
  onStatusClick: PropTypes.func.isRequired,
};

export default FilmsListItem;

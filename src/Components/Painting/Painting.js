import defaultUrl from './default.png';
import PropTypes from 'prop-types';

function Painting({
  url = defaultUrl,
  title,
  profilUrls,
  author = 'не известен',
  price,
  quantity,
}) {
  return (
    <>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автоr: <a href={profilUrls}>{author}</a>
      </p>
      <p>Price: {price} credits</p>
      <p>Доступность: {quantity > 10 ? 'Есть' : 'Остаток'} </p>
      <button type="button">Add in korzina</button>
    </>
  );
}

Painting.propTypes = {
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  profilUrls: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
export default Painting;

import PropTypes from 'prop-types';
import s from './Transaction.module.css';
export default function Transaction({ items }) {
  console.log(items);
  return (
    <>
      {items.map(item => (
        <tr key={item.id} id={item.id} className={s.tr}>
          <td className={s.td}>{item.type}</td>
          <td className={s.td}>{item.amount}</td>
          <td className={s.td}>{item.currency}</td>
        </tr>
      ))}
    </>
  );
}

Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string,
      type: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};

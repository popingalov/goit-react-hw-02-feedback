import Transaction from './Transaction/Transaction';
import s from './TransactionHistory.module.css';
export default function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr className={s.transaction}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <Transaction items={items} />
      </tbody>
    </table>
  );
}

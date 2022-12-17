import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export function Transaction({ id, type, amount, currency }) {
  return (
    <tr key={id} className={css.transactionRaw}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

Transaction.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';
import styles from './ColorPicker.module.css';

function ColorPicker({ options }) {
  return (
    <div className={styles.ColorPicker}>
      <h2 className={styles.ColorPicker__Title}>Color Picker</h2>
      <ul>
        {options.map(e => (
          <li
            key={e.color}
            className={styles.ColorPicker__option}
            style={{ backgroundColor: e.color }}
          ></li>
        ))}
      </ul>
    </div>
  );
}

ColorPicker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({ color: PropTypes.string.isRequired }),
  ),
};

export default ColorPicker;

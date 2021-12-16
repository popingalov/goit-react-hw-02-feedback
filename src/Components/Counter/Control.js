import PropTypes from 'prop-types';

export default function Controls({
  onInc,
  onIncSet,
  onSopCounter,
  onDec,
  onDecSet,
}) {
  return (
    <div className="Counter__controls">
      <button
        type="button"
        onClick={onInc}
        onMouseDown={onIncSet}
        onMouseUp={onSopCounter}
      >
        Увеличить
      </button>
      <button
        type="button"
        onClick={onDec}
        onMouseDown={onDecSet}
        onMouseUp={onSopCounter}
      >
        Уменьшить
      </button>
    </div>
  );
}

Controls.propTypes = {
  onDec: PropTypes.func,
  onDecSet: PropTypes.func,
  onInc: PropTypes.func,
  onIncSet: PropTypes.func,
  onSopCounter: PropTypes.func,
};

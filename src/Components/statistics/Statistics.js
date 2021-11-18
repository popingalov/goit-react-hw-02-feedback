import PropTypes from 'prop-types';
export default function Statistics({ stats, title }) {
  return (
    <section className="statistics">
      {title ? <h2 className="title">{title}</h2> : ''}
      <ul className="stat-list">
        {stats.map(e => (
          <li
            className="item"
            key={e.id}
            style={{
              backgroundImage: `linear-gradient(to right ,red ${e.percentage}%,silver ${e.percentage}%) `,
            }}
          >
            <span className="label">{e.label}:</span>
            <span className="percentage">{e.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any,
      labne: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
  title: PropTypes.string,
};

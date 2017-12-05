import './tabs.scss';

export const TabNav = ({ list, select }) => {
  const onClick = (e, id) => {
    select(id);
    e.preventDefault();
  };

  return (
    <nav className="nav-tab">
      <ul> {list.map(el =>
        (
          <li key={el.id}>
            <a
              href="#"
              onClick={e => onClick(e, el.id)}
            >
              <span>{el.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>);
};

TabNav.propTypes = {
  list: PropTypes.array.isRequired,
  select: PropTypes.func.isRequired
};

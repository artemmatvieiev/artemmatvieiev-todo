import './navigation.scss';

export const Navigation = (props) => {
  if (!props.list.length) {
    return null;
  }

  return (
    <nav className="main-nav">
      <ul>
        {
          props.list.map(item => (
            <li key={Date.now() + Math.random()}>
              <a href={`/${item.toLowerCase()}`}>{ item }</a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

Navigation.defaultProps = {
  list: []
};

Navigation.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string)
};

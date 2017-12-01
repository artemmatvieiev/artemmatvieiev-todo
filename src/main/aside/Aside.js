import { List } from '../../List';

import './aside.scss';

export const Aside = (props) => {
  const { items, clickHandler, loading } = props;

  return (
    <aside className="aside">
      <h2>Aside</h2>
      <List
        className="users-list"
        items={items}
        clickHandler={clickHandler}
      />
      { loading && <span key="3">Loading...</span> }
    </aside>
  );
};

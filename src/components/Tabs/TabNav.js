export const TabNav = ({ children, select, activeIndex }) => (
  <nav className="tab-nav">
    <ul className="tab-nav-list">
      {
        children.map((el, index) => {
          const TabLink = el.type;
          return (
            <li
              key={index}
              className={`tab-nav-item ${activeIndex === index ? 'active' : ''}`}
            >
              <TabLink
                {...el.props}
                select={select}
                index={index}
              />
            </li>
          );
        })
      }
    </ul>
  </nav>
);

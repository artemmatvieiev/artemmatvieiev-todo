export const TabNav = ({ children, select, activeIndex }) => (
  <nav className="nav-tab">
    <ul>
      {
        children.map((el, index) => {
          const Tablink = el.type;
          return (
            <li
              key={index}
              className={activeIndex === index ? 'active' : ''}
            >
              <Tablink
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

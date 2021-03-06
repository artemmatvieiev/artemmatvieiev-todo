export const TabLink = ({ title, index, select }) => {
  const onClick = (e) => {
    select(index);
    e.preventDefault();
  };

  return (
    <a
      className="tab-nav-link"
      href="#"
      onClick={onClick}
    >
      {title}
    </a>
  );
};

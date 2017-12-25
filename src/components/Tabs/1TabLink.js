export const TabLink = ({ title, index, select }) => {
  const onClick = (e) => {
    select(index);
    e.preventDefault();
  };

  return (
    <a
      href="#"
      onClick={onClick}
    >
      {title}
    </a>
  );
};

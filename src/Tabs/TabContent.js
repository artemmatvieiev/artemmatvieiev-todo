export const TabContent = ({ content }) => (
  <section className="tab-content">
    <p>{content}</p>
  </section>
);

TabContent.propTypes = {
  content: PropTypes.string.isRequired
};


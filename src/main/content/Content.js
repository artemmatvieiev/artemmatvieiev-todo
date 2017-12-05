import { List } from '../../List';

import './content.scss';

export const Content = ({ posts, loading }) => (
  <div className="content">
    <h2>Content</h2>
    <h3>Posts:</h3>
    <List
      className="posts-list"
      items={posts}
      field="body"
    />
    { loading && <span key="4">Loading...</span> }
  </div>
);

Content.propTypes = {
  loading: PropTypes.bool.isRequired
};

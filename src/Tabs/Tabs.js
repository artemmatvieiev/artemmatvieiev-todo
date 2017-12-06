import { TabNav } from './TabNav';
import { TabContent } from './TabContent';

import './tabs.scss';

export class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
  }

  componentDidMount() {
    this.clickTab(0);
  }

  clickTab = (id) => {
    this.setState({
      content: this.props.tabs[id].content
    });
  }

  render() {
    return (
      <section className="tab">
        <TabNav
          list={this.props.tabs.map(({ id, title }) => ({ id, title }))}
          select={this.clickTab}
        />
        <TabContent content={this.state.content} />
      </section>
    );
  }
}

const tabTypes = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string
});

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(tabTypes).isRequired
};

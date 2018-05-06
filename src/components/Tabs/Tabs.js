import { TabContent, Tab, TabLink, TabNav } from './';

import './tabs.scss';

export class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: this.props.selected || 0 };
  }

  clickTab = (id) => {
    this.setState({ id });
  }

  render() {
    const tabs = this.props.children
      .filter(child => child.type === Tab)
      .reduce((prev, next) => [...prev, ...next.props.children], []);

    const navList = tabs.filter(tab => tab.type === TabLink);
    const tabContents = tabs.filter(tab => tab.type === TabContent);

    return (
      <section className="tabs">
        <TabNav
          select={this.clickTab}
          activeIndex={this.state.id}
        >
          {navList}
        </TabNav>
        { tabContents[this.state.id] }
      </section>
    );
  }
}

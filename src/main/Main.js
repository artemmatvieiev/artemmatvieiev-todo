import { Aside } from './aside';
import { Content } from './content';
import { Greeting } from '../greeting';
import { Geolocation } from '../Geolocation';
import { Time } from '../Time';
import { ColorfulBackground } from '../ColorfulBackground';
import { Tabs } from '../Tabs';

import './main.scss';

const tabs = [
  { id: 0, title: 'Tab 1', content: 'Some text is here' },
  { id: 1, title: 'Tab 2', content: 'Another content' },
  { id: 2, title: 'Tab 3', content: 'Third text' },
  { id: 3, title: 'Tab 4', content: 'Fourth text' },
  { id: 4, title: 'Tab 5', content: 'Fifth text' }
];

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: [],
      loadingUsers: false,
      loadingPosts: false,
      showTime: true
    };
    this.getUsers();
  }

  getUsers = () => {
    this.setState({
      loadingUsers: true,
      users: []
    });

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users, loadingUsers: false }));
  }

  showUserPosts = (user) => {
    this.setState({
      loadingPosts: true,
      posts: []
    });

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
      .then(response => response.json())
      .then(posts => this.setState({ posts, loadingPosts: false }));
  }

  clickHandlerTime = () => {
    const { showTime } = this.state;
    this.setState({
      showTime: !showTime
    });
  }

  render() {
    const {
      users,
      posts,
      loadingUsers,
      loadingPosts,
      showTime
    } = this.state;

    return (
      <main className="main">
        <Greeting time={new Date().getHours()} name="Artem" />
        <Tabs tabs={tabs} />
        <button onClick={this.clickHandlerTime}>
          { showTime ? 'Remove time' : 'Show time' }
        </button>
        { showTime && <Time /> }
        <Geolocation />
        <ColorfulBackground />
        <h1 className="main-title">Main</h1>
        <Aside
          items={users}
          clickHandler={this.showUserPosts}
          loading={loadingUsers}
        />
        <Content
          posts={posts}
          loading={loadingPosts}
        />
      </main>
    );
  }
}

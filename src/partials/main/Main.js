import { Greeting } from 'components/greeting';
import { Geolocation } from 'components/Geolocation';
import { Time } from 'components/Time';
import { ColorfulBackground } from 'components/ColorfulBackground';
import { Tabs, Tablink, Tab, TabContent } from 'components/Tabs';
import { Aside } from './aside';
import { Content } from './content';

import './main.scss';

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
        <Tabs>
          <Tab>
            <Tablink title="Link 1" />
            <TabContent>
              <h1>I am tab 1</h1>
              <p>Lorem ispum</p>
            </TabContent>
          </Tab>

          <Tab>
            <Tablink title="Link 2" />
            <TabContent>
              <h1>I am tab 2</h1>
              <p>Lorem ispum</p>
            </TabContent>
          </Tab>

          <Tab>
            <Tablink title="Link 3" />
            <TabContent>
              <h1>I am tab 3</h1>
              <p>Lorem ispum</p>
            </TabContent>
          </Tab>
        </Tabs>
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

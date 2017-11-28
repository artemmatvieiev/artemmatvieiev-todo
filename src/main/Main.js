import React, { Component } from 'react';

import { Aside } from './aside';
import { Content } from './content';
import { Greeting } from '../greeting';
import { ToggleButton } from '../ToggleButton';

import './main.scss';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      users: [],
      posts: [],
      loadingUsers: false,
      loadingPosts: false,
      activeToggleButton: false,
      activeGeolocation: false,
      latitude: 0,
      longitude: 0
    };
    this.getUsers();
    this.getGeolocation();
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

  clickHandlerToggle = (active) => {
    const activeValue  = this.state[active];
    
    activeValue 
      ? this.setState({ [active]: false })
      : this.setState({ [active]: true })
  }

  getGeolocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude 
        });                       
      });
    } else {
        alert("Geolocation API не поддерживается в вашем браузере");
    }
  }
  
  render() {
    const { 
      users, 
      posts, 
      loadingUsers, 
      loadingPosts, 
      latitude, 
      longitude,
      activeToggleButton,
      activeGeolocation 
    } = this.state;

    return (
      <main className='main'>
        <Greeting time={ new Date().getHours() } name='Artem'/>
        <ToggleButton 
          clickHandler={ this.clickHandlerToggle }
          activeText='activeToggleButton'
          classToggleButton='btn-toggle' 
          text='show' 
          toggleText='hide'
          classToggleComponent='hide'
          textToggleComponent='Some text'
          active={ activeToggleButton }
        />
        <ToggleButton 
          clickHandler={ this.clickHandlerToggle }
          activeText='activeGeolocation'
          text='Show my geolocation' 
          toggleText='Hide my geolocation'
          classToggleComponent='geolocation'
          textToggleComponent={ `latitude: ${ latitude } longitude: ${ longitude }` }
          active={ activeGeolocation }
          text='Show my geolocation' 
          toggleText='Hide my geolocation'
          idToggleComponent='geolocation'
        />
        <h1 className='main-title'>Main</h1>
        <Aside 
          getUsers={ this.getUsers }
          items={ users }
          clickHandler={ this.showUserPosts }
          loading={ loadingUsers }
        />
        <Content 
          posts={ posts } 
          loading={ loadingPosts }
        />
      </main>
    );
  }
};

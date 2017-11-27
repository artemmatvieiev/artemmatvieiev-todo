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

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => this.setState({ 
        posts: posts.filter(post => post.userId == user.id), 
        loadingPosts: false 
      }));
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
    const { users, posts, loadingUsers, loadingPosts, latitude, longitude } = this.state;
    
    return (
      <main className='main'>
        <Greeting time={ new Date().getHours() } name='Artem'/>
        <div>
          <ToggleButton 
            className='btn-toggle' 
            text='show' 
            toggleText='hide'
            toggleComponentId='hide'
          />
          <span id="hide">Some text</span>
          <ToggleButton 
            text='Show my geolocation' 
            toggleText='Hide my geolocation'
            toggleComponentId='geolocation'
          />
          <span id="geolocation">
            { `latitude: ${ latitude } longitude: ${ longitude }` }
          </span>
        </div>
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

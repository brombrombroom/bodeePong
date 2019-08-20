import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
// components
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Navbar from './components/navbar'
import Home from './components/home'
import React from 'react'
import ReactDOM from 'react-dom'
import 'aframe'
import { Entity, Scene } from 'aframe-react'
import 'aframe-environment-component'
import 'networked-aframe'


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <div className="App">

        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <div>
              <p>This will be the welcome page and the beginning layout of the minecraft template.</p>

          </div>
        }
        {/* Routes to different components */}
        <Route
          exact path="/"
          component={Home} />
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup/>}
        />

      </div>
    );
  }
}


function Template({ children, ...attrs }) {
  return (
    <template
      {...attrs}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}

class App extends React.Component {
    render() {
        return (<div>
      <Scene environment="preset: forest;" networked-scene={{
        serverURL: 'http://localhost:8080/',
        connectOnLoad: true,
        onConnect: 'onConnect',
        adapter: 'wseasyrtc',
        audio: false,
        debug: false
      }}>
      <Template id="avatar-template">
           <div><Entity primitive="a-sphere" color="#f00"></Entity></div>
      </Template>
        <Entity id="player" networked={{template: '#avatar-template',attachTemplateToLocal:false}} spawn-in-circle={{radius:3}} wasd-controls look-controls>
      </Entity>
      </Scene></div>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;

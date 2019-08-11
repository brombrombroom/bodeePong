import React, { Component } from 'react'

class Home extends Component {
    constructor() {
        super()
    }


    render() {
        const imageStyle = {
            width: 400
        }
        return (
          <div>
          <p> Edit <code>src/App.js</code> and save to reload. </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
            Learn React
          </a>
          <p>This will be the welcome page and the beginning layout of the minecraft template.</p>
          <img style={imageStyle} src="https://i.ytimg.com/vi/eEgL3cKydss/maxresdefault.jpg" />
      </div>
        )

    }
}

export default Home

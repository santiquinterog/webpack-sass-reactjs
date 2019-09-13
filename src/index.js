import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const style = {
  color: 'slateblue'
}

class App extends Component {
  render () {
    return <h1 style={style}>Hi DWA</h1>
  }
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)

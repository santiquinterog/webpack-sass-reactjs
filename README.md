# webpack-sass-vanillajs

Using Sass + vanilla js + Webpack

## Requirements

```
npm i -g npx
```

### Reactjs Setup

**devDependencies**

```
npm i -D @babel/preset-react
```

**dependencies**

```
npm i -S react react-dom
```

**Put .babelrc file in the root of your app**

```
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

## Usage

```
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render () {
    return <h1>Hi DWA</h1>
  }
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)
```

## Run

```
npm i
npx webpack-dev-server
```
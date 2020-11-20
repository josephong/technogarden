import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Garden from './routes/Garden'
import About from './routes/About'

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={About} exact />
          <Route path="/garden" component={Garden} exact />
          <Route path="/about" component={About} exact />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

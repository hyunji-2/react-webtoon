import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './container/Main';
import WebtoonHome from './container/WebtoonHome';
import Viewer from './container/Viewer';
import NoMatch from './component/NoMatch'

class App extends Component {
  render() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/webtoon/:webtoonId" component={WebtoonHome} />
          <Route path="/viewer/:episodeId" component={Viewer} />
          <Route component={NoMatch} />
        </Switch>
        </Router>
    );
  }
}

export default App;

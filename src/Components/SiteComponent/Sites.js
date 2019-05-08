import React from 'react';
import {
  Switch,
  Route
} from            'react-router-dom';
import Site from  './Site';

const Sites = () => (
  <Switch>
    <Route path='/sites/:pageId' component={Site}/>
  </Switch>
)

export default Sites;
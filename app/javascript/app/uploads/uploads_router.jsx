import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NewUpload from './new_upload';

const UploadRouter = () => (
  <Switch>
    <Route component={NewUpload} exact path="/uploads/new" />
  </Switch>
);

export default UploadRouter;

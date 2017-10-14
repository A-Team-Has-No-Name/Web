'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import NotFoundPage from './components/NotFoundPage';
import ItemDetailPage from './components/item_detail/ItemDetailPage';

const routes = (
  <Route path="/" component={ItemDetailPage}>
      <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;

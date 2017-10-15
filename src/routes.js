'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import NotFoundPage from './components/NotFoundPage';
import ItemDetailPage from './components/item_detail/ItemDetailPage';
import Layout from './components/Layout';
import LoginPage from './components/LoginPage';
import CategoriesListPage from './components/CategoriesListPage';
import CategoryDetailPage from './components/category_detail/CategoryDetailPage';

const routes = (
  <Route exact path="/" component={Layout} >
      <IndexRoute component={LoginPage}/>
      <Route path="/categories" component={CategoriesListPage} />
      <Route path="/categories/:id" component={CategoryDetailPage} />
      {/*<Route path="badges" component={BadgesPage} />*/}
  </Route>

);

export default routes;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import ProductsView from './views/ProductsView/ProductsView';
import MyProductsView from './views/MyProductsView/MyProductsView';
import NotFoundView from './views/NotFoundView/NotFoundView';

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <AppBar />
        <Switch>
          <Route path="/" exact>
            <ProductsView />
          </Route>

          <Route path="/my-products" exact>
            <MyProductsView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

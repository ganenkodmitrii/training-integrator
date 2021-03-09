import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import ProductsView from './views/ProductsView/ProductsView';
import CartView from './views/CartView/CartView';
import NotFoundView from './views/NotFoundView/NotFoundView';
import ProductProvider from './context/ProductContext';

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <ProductProvider>
          <AppBar />
          <Switch>
            <Route path="/" exact>
              <ProductsView />
            </Route>

            <Route path="/cart" exact>
              <CartView />
            </Route>

            <Route>
              <NotFoundView />
            </Route>
          </Switch>
        </ProductProvider>
      </Container>
    </BrowserRouter>
  );
}

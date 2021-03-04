import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import ProductsView from './views/ProductsView/ProductsView';
import MyProductsView from './views/MyProductsView/MyProductsView';
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

            <Route path="/my-products" exact>
              <MyProductsView />
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

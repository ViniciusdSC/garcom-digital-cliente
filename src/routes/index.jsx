import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode, faWallet } from '@fortawesome/free-solid-svg-icons';

import MainLayout from '~/layouts/Main';

import CreateConta from '~/pages/Conta/Create';
import ActiveConta from '~/pages/Conta/Active';
import ViewConta from '~/pages/Conta/View';

import ProdutosList from '~/pages/Produto/List';
import ProdutoView from '~/pages/Produto/View';
import PedirConta from 'pages/Conta/Pedir';

// ShoppingCart
export default function Routes() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/conta/create/:uid">
            <MainLayout>
              <CreateConta />
            </MainLayout>
          </Route>
          <Route path="/conta/active">
            <MainLayout>
              <ActiveConta />
            </MainLayout>           
          </Route>
          <Route path="/conta/view">
            <MainLayout>
              <ViewConta />
            </MainLayout>           
          </Route>
          <Route path="/conta/pedir">
            <MainLayout>
              <PedirConta />
            </MainLayout>           
          </Route>
          <Route exact path="/">
            <MainLayout>
              <ProdutosList />
            </MainLayout>
          </Route>
          <Route path="/produto/:id">
            <MainLayout>
              <ProdutoView />
            </MainLayout>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

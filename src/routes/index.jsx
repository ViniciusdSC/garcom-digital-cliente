import React from 'react';
import { Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import {useSelector} from 'react-redux';
import history from './history';
import PrevHeader from '~/components/Header/Prev';

import MainLayout from '~/layouts/Main';

import CreateConta from '~/pages/Conta/Create';
import ActiveConta from '~/pages/Conta/Active';
import ViewConta from '~/pages/Conta/View';

import ProdutosList from '~/pages/Produto/List';
import ProdutoView from '~/pages/Produto/View';
import PedirConta from '~/pages/Conta/Pedir';

import AuthError from '~/pages/Error/Auth';

function PrivateRoute (...props) {
  const token = useSelector(({auth}) => auth.token);
  const {push} = useHistory();

  if (token) {
    return <Route {...props} />
  }
  
  push("error/auth", {
    error_code: 1,
    error_message: "Sessão não encontrada!"
  })
}

function GuestRoute (...props) {
  const token = useSelector(({auth}) => auth.token);

  if (!token) {
    return <Route {...props} />
  }

  return <Redirect to="/" />;
}

// ShoppingCart
export default function Routes() {
  return (
    <Router history={history}>
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
            <MainLayout header={(props) => <PrevHeader {...props} />}>
              <ViewConta />
            </MainLayout>           
          </Route>
          <Route path="/conta/pedir">
            <MainLayout header={(props) => <PrevHeader {...props} />}>
              <PedirConta />
            </MainLayout>           
          </Route>
          <Route exact path="/">
            <MainLayout>
              <ProdutosList />
            </MainLayout>
          </Route>
          <Route path="/produto/:id">
            <MainLayout header={(props) => <PrevHeader {...props} />}>
              <ProdutoView />
            </MainLayout>
          </Route>
          <Route path="/error/auth">
            <AuthError />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

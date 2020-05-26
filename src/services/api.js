import axios from 'axios';
import {store} from '~/store';

export const instance = () => {
  const {auth} = store.getState();

  return axios.create({
    baseURL: process.env.REACT_APP_BASE_API,
    timeout: 5000,
    headers: {
      'Authorization': `Bearer ${auth.token}`
    }
  });
}

export const method = () => instance().post('method');

export const create_conta = async function (uid) {
  const res = await instance().post('conta', {
    mesa_uid: uid
  });
  return res.data;
}

export const verificarConta = async function () {
  const res = await instance().post('conta/verificar');

  return res.data;
};

export const pedirConta = async function () {
  const res = await instance().post('conta/pedir');

  return res.data;
}

export const verificarPagamento = async function () {
  const res = await instance().post('conta/verificar-pagamento');

  return res.data;
}

export const getProdutos = async function () {
  const res = await instance().get('produto');

  return res.data;
}

export const getProduto = async function (produto_id) {
  const res = await instance().get(`produto/${produto_id}`);

  return res.data;
}

export const postPedidos = async function (produtos) {
  const res = await instance().post('pedido', { produtos });

  return res.data;
}

export const getPedidos = async function () {
  const res = await instance().get('pedido');

  return res.data;
}
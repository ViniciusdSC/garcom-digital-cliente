import axios from 'axios';
import {store} from '~/store';
import history from '~/routes/history';

export const instance = () => {
  const {auth} = store.getState();

  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_API,
    timeout: 5000,
    headers: {
      'Authorization': `Bearer ${auth.token}`
    }
  });

  console.log('history', history);

  instance.interceptors.response.use(function (response) {
    if (!response.data.status) {
      switch (response.data.error_code) {
        case 101:
          console.log(response.data.error_message);
          history.push("/error/auth", {
            error_code: 101,
            error_message: "Problemas de autorização com o servidor!"
          });
          break;
        case 102:
          history.push("/error/auth", {
            error_code: 102,
            error_message: "Problemas de autorização com o servidor!"
          });
          break;
        case 103:
          history.push("/error/auth", {
            error_code: 103,
            error_message: "Problemas de autorização com o servidor!"
          });
          break;
        case 201:
          history.push("/conta/active");
          break;
        case 202:
          history.push("/conta/pedir");
          break;
        case 203:
          console.log('erro 203');
          break;
        default:
          console.log('ok');
          break;
      }
    }

    return response;
  });

  return instance;
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
  const res = await instance().post('conta/pedir-fechamento');

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
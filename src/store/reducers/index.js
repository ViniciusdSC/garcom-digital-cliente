import {combineReducers} from 'redux';

import auth from './auth';
import carrinho from './carrinho';

// insert your reducer here
export default combineReducers({
    auth,
    carrinho
});

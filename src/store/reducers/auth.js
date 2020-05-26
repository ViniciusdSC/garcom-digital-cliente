export default function (state = { token: '', ativo: false }, action) {
    if (action.type === 'SET_TOKEN') {
        return {...state, token: action.payload.token};
    }
    return state;
}
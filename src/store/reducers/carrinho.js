export const TYPES = {
    ADD_PEDIDO: 'ADD_PEDIDO',
    REMOVE_PEDIDO: 'REMOVE_PEDIDO',
    REMOVE_ALL: 'REMOVE_ALL'
};

export default function (state = [], {type, payload}) {
    switch (type) {
        case TYPES.ADD_PEDIDO:
            return [...state, payload];
        case TYPES.REMOVE_PEDIDO:
            return state.filter((item, key) => key !== payload.key);
        case TYPES.REMOVE_ALL:
            return [];
        default:
            return state;
    }
}
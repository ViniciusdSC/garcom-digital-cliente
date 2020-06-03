export const TYPES = {
    PREV_TRUE: 'PREV_TRUE',
    PREV_FALSE: 'PREV_FALSE'
};

export default function (state = false, {type}) {
    switch (type) {
        case TYPES.PREV_TRUE:
            return true;
        case TYPES.PREV_FALSE:
            return false;
        default:
            return status;
    }
}
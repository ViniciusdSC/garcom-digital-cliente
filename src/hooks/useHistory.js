import {useHistory as useHistoryNative} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { TYPES } from "~/store/reducers/hasPrev";

export default function useHistory () {
    const {push, ...history} = useHistoryNative();
    const dispatch = useDispatch();

    function newPush (path, state = {}) {
        push(path, state);
        dispatch({
            type: TYPES.PREV_TRUE
        });
    }

    return {
        push: newPush,
        ...history
    };
}
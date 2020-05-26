import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

import { create_conta } from '~/services/api';
import {ProgressContainer} from './styles';

function CreateConta() {
    const {push} = useHistory();
    const dispatch = useDispatch();
    const { uid } = useParams();

    useEffect(() => {
        async function storeToken() {
            const { token } = await create_conta(uid);
            dispatch({
                type: "SET_TOKEN",
                payload: { token }
            });
            push("/conta/active");
        }

        storeToken();
    }, [uid, dispatch]);

    return (
        <ProgressContainer>
            <CircularProgress />
        </ProgressContainer>
    )
}

export default CreateConta;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { create_conta, verificarConta } from '~/services/api';
import {
    QrCodeImg,
    Alert,
    Container,
    Title,
    ProgressContainer
} from './styles';
import { IconButton, CircularProgress } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import QRCode from 'qrcode'

function SolicitacaoDeConta() {
    const [qrCode, setQrCode] = useState();
    const [open, setOpen] = useState(true);
    const [backdrop, setBackDrop] = useState(false);
    const [canRequest, setCanRequest] = useState(false);
    const dispatch = useDispatch();
    const { uid } = useParams();

    useEffect(() => {
        async function storeToken() {
            setBackDrop(true);
            const { token } = await create_conta(uid);
            dispatch({
                type: "SET_TOKEN",
                payload: { token }
            });
            QRCode.toDataURL(token)
                .then(url => {
                    setQrCode(url);
                    setBackDrop(false);
                    setOpen(true);
                    setCanRequest(true);
                })
                .catch(err => {
                    console.error(err)
                })
        }

        storeToken();
    }, [uid, dispatch]);

    useEffect(() => {
        if (canRequest) {
            setCanRequest(false);
            console.log('request');
            verificarConta().then(({status}) => {
                if (!status) {
                    setTimeout(() => setCanRequest(true), 1000);
                } else {
                    console.log('true');
                }
            });
        }
    }, [canRequest])

    const AlertState = function () {
        if (open) {
            return (
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >Comando solicitado com sucesso!</Alert>
            );
        }
        return <></>
    }

    if (backdrop) {
        return (
            <ProgressContainer>
                <CircularProgress />
            </ProgressContainer>
        )
    }

    return (
        <Container>
            <AlertState />
            <Title>Aguarde o garçom para liberar sua comanda!</Title>
            <QrCodeImg src={qrCode} alt="qr-code" />
        </Container>  
    )
}

export default SolicitacaoDeConta;
import React, { useState, useEffect } from 'react';
import { verificarConta } from '~/services/api';
import {
    QrCodeImg,
    Container,
    Title,
    Alert
} from './styles';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import QRCode from 'qrcode'

function ActiveConta () {
    const [qrCodeImg, setQrCodeImg] = useState();
    const [canRequest, setCanRequest] = useState(true);
    const {push} = useHistory();
    const token = useSelector(({auth}) => auth.token);

    useEffect(() => {
        QRCode.toDataURL(token)
            .then(url => {
                setQrCodeImg(url);
                setCanRequest(true);
            })
            .catch(err => {
                console.error(err)
            })
    }, []);

    useEffect(() => {
        if (canRequest) {
            setCanRequest(false);
            verificarConta().then(({status}) => {
                if (!status) {
                    setTimeout(() => setCanRequest(true), 3000);
                } else {
                    push("/");
                }
            });
        }
    }, [canRequest]);

    return (
        <Container>
            <Alert>Garçom chamado com sucesso!</Alert>
            <Title>Aguarde o garçom para liberar sua comanda!</Title>
            <QrCodeImg src={qrCodeImg} alt="qr-code" />
        </Container>  
    )
}

export default ActiveConta;
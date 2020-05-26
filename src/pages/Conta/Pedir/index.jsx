import React, { useState, useEffect, useContext } from 'react';
import { pedirConta, verificarPagamento } from '~/services/api';
import {CircularProgress} from '@material-ui/core';
import {
    QrCodeImg,
    Container,
    Title,
    Alert,
    ProgressContainer
} from './styles';
import {useSelector} from 'react-redux';
import QRCode from 'qrcode';
import DialogDisplayContext from '~/context/DialogDisplayContext';

function PedirConta () {
    const [qrCodeImg, setQrCodeImg] = useState();
    const [canRequest, setCanRequest] = useState(false);
    const [loading, setLoading] = useState(true);
    const token = useSelector(({auth}) => auth.token);
    const openDialog = useContext(DialogDisplayContext);

    useEffect(() => {
        pedirConta().then(({status, ...rest}) => {
            if (status) {
                QRCode.toDataURL(token)
                    .then(url => {
                        setQrCodeImg(url);
                        setCanRequest(true);
                    })
                    .catch(err => {
                        console.error(err)
                    })
            } else {
                console.log(rest);
            }
            setLoading(false);
        })
        
    }, []);

    useEffect(() => {
        if (canRequest) {
            setCanRequest(false);
            verificarPagamento().then(({status}) => {
                if (!status) {
                    setTimeout(() => setCanRequest(true), 3000);
                } else {
                    openDialog("Pagamento realizado com sucesso!");
                }
            });
        }
    }, [canRequest]);

    if (loading) {
        return (
            <ProgressContainer>
                <CircularProgress />
            </ProgressContainer>
        )
    }

    return (
        <Container>
            <Alert>Conta solicitada com sucesso!</Alert>
            <Title>Aguarde o garçom para fazer o pagamento!</Title>
            <QrCodeImg src={qrCodeImg} alt="qr-code" />
        </Container>  
    )
}

export default PedirConta;
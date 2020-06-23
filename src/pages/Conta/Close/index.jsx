import React, { useState, useEffect } from 'react';
import {
    QrCodeImg,
    Container,
    Title
} from './styles';
import {useSelector} from 'react-redux';
import QRCode from 'qrcode';

function CloseConta () {
    const [qrCodeImg, setQrCodeImg] = useState();
    const token = useSelector(({auth}) => auth.token);

    useEffect(() => {
        QRCode.toDataURL(token)
            .then(url => {
                setQrCodeImg(url);
            })
            .catch(err => {
                console.error(err)
        })
    }, []);

    return (
        <Container>
            <Title>Sua conta foi fechada, Muito obrigado!</Title>
            <QrCodeImg src={qrCodeImg} alt="qr-code" />
        </Container>  
    )
}

export default CloseConta;
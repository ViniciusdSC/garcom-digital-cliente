import React from 'react';
import QrReader from 'react-qr-reader';
import {
    Container,
    Title,
    Button,
} from './styles';

function Camera () {
    function handleError (err) {
        console.log(err)
    }

    function handleScan (data) {
        if (data) {
            window.location.href = data;
        }
    }

    return (
        <Container>
            <div>
                <Title>Escaneie o QR Code para liberar a mesa!</Title>
            </div>
            <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}
            />
            <div>
                <Title>Caso já tenha criado uma conta, solicite um garçom para recupera-la!</Title>
                <Button variant="contained" color="primary" disableElevation>
                    Solicitar Garçom
                </Button>
            </div>
        </Container>
    )
}

export default Camera;
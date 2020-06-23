import React from 'react';
import Button from '@material-ui/core/Button';
import {useLocation, useHistory} from 'react-router-dom';
import {
    ErrorDescription,
    ErrorTitle,
    Container,
    ErrorIcon,
    ErrorIconContainer,
    ButtonContainer
} from './styles';

export default function Auth () {
    const {state} = useLocation();
    const {replace} = useHistory();
    const {error_code, error_message} = state;

    return (
        <Container>
            <ErrorIconContainer>
                <ErrorIcon color="secondary" />
            </ErrorIconContainer>
            <ErrorTitle>
                Erro {error_code}
            </ErrorTitle>
            <ErrorDescription>
                {error_message}
            </ErrorDescription>
            <ButtonContainer>
                <Button 
                    onClick={() => replace("/camera")} 
                    variant="contained" 
                    color="primary" 
                    disableElevation
                >
                    Liberar uma nova mesa
                </Button>
            </ButtonContainer>
        </Container>
    )
}
import styled from 'styled-components';
import {Warning} from '@material-ui/icons';
import ButtonNative from '@material-ui/core/Button';

export const ErrorTitle = styled.h1`
    text-align: center;
`

export const ErrorDescription = styled.h3`
    text-align: center;
`

export const Container = styled.div`
    position: absolute;
    background-color: #f1f1f1;
    height: 100vh;
    width: 100vw;
`

export const ErrorIconContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
`

export const ErrorIcon = styled(Warning)`
    font-size: 150px !important;
`

export const ButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
`
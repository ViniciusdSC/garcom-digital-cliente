import styled from 'styled-components';
import { Button as ButtonNative } from '@material-ui/core';

export const ContaTotalContainer = styled.div`
    display: flex;
    padding: 0px 20px;
`;

export const ContaTotal = styled.h4`
    margin-left: auto;
`;

export const ContaTitle = styled.h4``;

export const ContainerButton = styled.div`
    padding: 10px;
    position: absolute;
    bottom: 0px;
    width: calc(100% - 20px);
`

export const Button = styled(ButtonNative)`
    width: 100%;
`

export const ProgressContainer = styled.div`
    width: 100%;
    height: calc(100vh - 56px);
    display: flex;
    align-items: center;
    justify-content: center;
`
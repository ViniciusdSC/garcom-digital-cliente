import styled from 'styled-components';
import { Button as ButtonNative } from '@material-ui/core';

export const ProdutoImg = styled.img`
    width: 100%;
`

export const Container = styled.div`
    padding: 0px 20px;
`

export const Button = styled(ButtonNative)`
    width: 90%;
    position: absolute !important;
    bottom: 0px;
    margin: 5% !important;
`

export const ProgressContainer = styled.div`
    width: 100%;
    height: calc(100vh - 56px);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PageContainer = styled.div`
    min-height: calc(100vh - 56px)
`
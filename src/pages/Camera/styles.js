import styled from 'styled-components';
import { Button as ButtonNative } from '@material-ui/core';

export const Container = styled.div`
    height: calc(100vh - 56px);
    display: flex;
    flex-direction: column;
`

export const Button = styled(ButtonNative)`
    margin: 10px;
    float: right;
`

export const Title = styled.h3`
    padding: 0px 10px;
`
import styled from 'styled-components';
import { Button as ButtonNative } from '@material-ui/core';
import { ListItemSecondaryAction as ListItemSecondaryActionNative } from '@material-ui/core';

export const Button = styled(ButtonNative)`
    width: 100%;
`

export const ContainerButton = styled.div`
    padding: 10px;
`

export const ListItemSecondaryAction = styled(ListItemSecondaryActionNative)`
    display: flex;
    align-items: center;
`
import React from 'react';
import {
    AppBar as MaterialAppBar,
    Toolbar,
    Typography,
} from '@material-ui/core';
import { RightContainer } from './styles';

function AppBar ({ rightContent, leftContent }) {
    const RightContent = rightContent ? rightContent : () => <></>;
    const LeftContent = leftContent ? leftContent : () => <></>;

    return (
        <MaterialAppBar position="static">
            <Toolbar>
                <LeftContent />
                <Typography variant="h6">
                    Garçom digital
                </Typography>
                <RightContainer>
                    <RightContent />
                </RightContainer>
            </Toolbar>
        </MaterialAppBar>
    )
}

export default AppBar;
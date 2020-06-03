import React from 'react';
import {useHistory} from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Badge,
} from '@material-ui/core';
import {ShoppingCart, AccountBalanceWallet, ArrowBack} from '@material-ui/icons';
import {useSelector} from 'react-redux';
import { RightContainer } from '../styles';

function PrevHeader ({setDrawerIsOpen}) {
    const history = useHistory();
    const pedidos = useSelector(({carrinho}) => carrinho.length);

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton onClick={() => history.goBack()} edge="start" color="inherit">
                    <ArrowBack />
                </IconButton>
                <Typography variant="h6">
                    Garçom digital
                </Typography>
                <RightContainer>
                    <IconButton 
                        onClick={() => setDrawerIsOpen(true)} 
                        edge="end" 
                        color="inherit" 
                        aria-label="menu"
                    >
                        <Badge badgeContent={pedidos} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <IconButton onClick={() => history.push("/conta/view")} edge="start" color="inherit">
                        <AccountBalanceWallet />
                    </IconButton>
                </RightContainer>
            </Toolbar>
        </AppBar>
    )
}

export default PrevHeader;
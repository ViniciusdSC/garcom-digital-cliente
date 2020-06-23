import React from 'react';
import {useHistory} from 'react-router-dom';
import AppBar from '~/components/Header/AppBar';
import {
    Badge,
} from '@material-ui/core';
import {ShoppingCart, AccountBalanceWallet} from '@material-ui/icons';
import {useSelector} from 'react-redux';
import {
    RightIconButton
} from './styles';

function HomeHeader ({setDrawerIsOpen}) {
    const history = useHistory();
    const pedidos = useSelector(({carrinho}) => carrinho.length);

    function RightContent () {
        return (
            <>
                <RightIconButton 
                    onClick={() => setDrawerIsOpen(true)} 
                    edge="end" 
                    color="inherit" 
                    aria-label="menu"
                    style={{ margin: 0 }}
                >
                    <Badge badgeContent={pedidos} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </RightIconButton>
                <RightIconButton onClick={() => history.push("/conta/view")} edge="start" color="inherit">
                    <AccountBalanceWallet />
                </RightIconButton>
            </>
        )
    }

    return (
        <AppBar
            rightContent={() => <RightContent />}
        />
    )
}

export default HomeHeader;
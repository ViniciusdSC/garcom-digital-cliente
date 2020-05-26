import React, {useState, createContext} from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Badge,
    Dialog,
    DialogActions,
    DialogTitle,
    Button
} from '@material-ui/core';
import {ShoppingCart, AccountBalanceWallet} from '@material-ui/icons';
import { RightContainer } from './styles';
import CarrinhoDrawer from '~/components/CarrinhoDrawer';
import {useSelector} from 'react-redux';
import DialogDisplayContext from '~/context/DialogDisplayContext';
import { useHistory } from 'react-router-dom';

function MainLayout ({children}) {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const [dialogTitle, setDialogTitle] = useState('');
    const pedidos = useSelector(({carrinho}) => carrinho.length);
    const {push} = useHistory();

    return (
        <DialogDisplayContext.Provider value={(title) => {
            setDialogTitle(title);
            setDialogIsOpen(true);
        }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={() => push("/conta/view")} edge="start" color="inherit">
                        <AccountBalanceWallet />
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
                    </RightContainer>
                </Toolbar>
            </AppBar>
            <Dialog
                open={dialogIsOpen}
                onClose={() => setDialogIsOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
                <DialogActions>
                <Button onClick={() => setDialogIsOpen(false)} color="primary">
                    Ok
                </Button>
                </DialogActions>
            </Dialog>
            {children}
            <CarrinhoDrawer 
                open={drawerIsOpen} 
                anchor="bottom" 
                onClose={() => setDrawerIsOpen(false)}
                openDialog={() => setDialogIsOpen(true)}
            />
        </DialogDisplayContext.Provider>
    )
}

export default MainLayout;
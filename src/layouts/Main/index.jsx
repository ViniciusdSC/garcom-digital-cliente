import React, {useState, createContext} from 'react';
import {
    Dialog,
    DialogActions,
    DialogTitle,
    Button
} from '@material-ui/core';
import CarrinhoDrawer from '~/components/CarrinhoDrawer';
import DialogDisplayContext from '~/context/DialogDisplayContext';
import { useHistory } from 'react-router-dom';
import Header from '~/components/Header';

function MainLayout ({children, ...props}) {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const [dialogTitle, setDialogTitle] = useState('');
    const {push, ...history} = useHistory();
    const AppHeader = props.header ? props.header : <Header />;

    return (
        <DialogDisplayContext.Provider value={(title) => {
            setDialogTitle(title);
            setDialogIsOpen(true);
        }}>
            <AppHeader setDrawerIsOpen={setDrawerIsOpen} />
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
            />
        </DialogDisplayContext.Provider>
    )
}

export default MainLayout;
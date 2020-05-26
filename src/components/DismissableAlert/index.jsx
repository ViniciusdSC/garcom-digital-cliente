import React, {useState} from 'react';
import {IconButton} from '@material-ui/core';
import {Alert} from '@material-ui/lab';
import { Close as CloseIcon } from '@material-ui/icons';

function DismissableAlert ({children}) {
    const [isOpen, setIsOpen] = useState(true);

    if (isOpen) {
        return (
            <Alert
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
            >{children}</Alert>
        )
    }

    return <></>;
}

export default DismissableAlert;
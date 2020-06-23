import React from 'react';
import {useHistory} from 'react-router-dom';
import AppBar from '~/components/Header/AppBar';
import {
    IconButton,
} from '@material-ui/core';
import {ArrowBack} from '@material-ui/icons';

function PrevHeader () {
    const history = useHistory();
    
    function LeftContent () {
        return (
            <IconButton onClick={() => history.goBack()} edge="start" color="inherit">
                <ArrowBack />
            </IconButton>
        )
    }

    return (
        <AppBar
            leftContent={() => <LeftContent />}
        />
    )
}

export default PrevHeader;
import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {useLocation} from 'react-router-dom';
import {
    Card,
    Typography
} from './styles';

export default function Auth () {
    const {state} = useLocation();
    const {error_code, error_message} = state;

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    Erro {error_code}
                </Typography>
                <br />
                <Typography variant="h5" component="h2">
                    {error_message}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {getPedidos, pedirConta} from '~/services/api';
import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    ListSubheader,
    Avatar,
    ListItemSecondaryAction,
    CircularProgress
} from '@material-ui/core';
import {
    ContaTotalContainer,
    ContaTotal,
    ContaTitle,
    ContainerButton,
    Button,
    ProgressContainer
} from './styles';

export default function ViewConta () {
    const [pedidos, setPedidos] = useState([]);
    const [total, setTotal] = useState('');
    const [loading, setLoading] = useState(true);
    const {push} = useHistory();

    useEffect(() => {
        getPedidos().then(({status, ...rest}) => {
            if (status) {
                if (rest.data.length === 0) {
                    setTotal(0);
                } else {
                    setTotal(
                        rest.data
                            .map(({preco}) => preco)
                            .reduce((accumulator, currentValue) => accumulator + currentValue)
                    );
                }
                setPedidos(rest.data);
            } else {
                console.log(rest);
            }
            setLoading(false);
        })
    }, [])

    function ProdutoItem ({ produto }) {
        return (
            <ListItem>
				<ListItemAvatar>
					<Avatar>
						<img src={produto.imagem} alt="img" />
					</Avatar>
				</ListItemAvatar>
				<ListItemText
					primary={produto.nome}
					secondary={null}
				/>
				<ListItemSecondaryAction>
                    <ListItemText
                        primary={produto.preco}
                        secondary={null}
                    />
				</ListItemSecondaryAction>
			</ListItem>
        )
    }

    function handlePedirConta () {
        
    }

    if (loading) {
        return (
            <ProgressContainer>
                <CircularProgress />
            </ProgressContainer>
        )
    }

    return (
        <>
            <ContaTotalContainer>
                <ContaTitle>Total:</ContaTitle>
                <ContaTotal>R$ {total}</ContaTotal>
            </ContaTotalContainer>
            <List
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Lista de pedidos
                    </ListSubheader>
                }
            >
                {pedidos.map((produto, key) => (
                    <ProdutoItem key={key} index={key} produto={produto} />
                ))}
            </List>
            <ContainerButton>
                <Button 
                    onClick={() => push("/conta/pedir")} 
                    variant="contained" 
                    color="primary"
                >Pedir a conta</Button>
            </ContainerButton>
        </>
    )
}
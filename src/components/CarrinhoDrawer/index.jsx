import React, {useContext} from 'react';
import Drawer from '@material-ui/core/Drawer';
import {useSelector, useDispatch} from 'react-redux';
import {TYPES} from '~/store/reducers/carrinho';
import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    ListSubheader,
    Avatar,
    IconButton
} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import {postPedidos} from '~/services/api';
import {
    Button,
    ContainerButton,
    ListItemSecondaryAction
} from './styles';
import DialogDisplayContext from '~/context/DialogDisplayContext';

export default function CarrinhoDrawer (props) {
    const pedidos = useSelector(({carrinho}) => carrinho);
    const dispatch = useDispatch();
    const openDialog = useContext(DialogDisplayContext);

    function ProdutoItem({ produto, index }) {
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
					<>
						<ListItemText
							primary={produto.preco}
							secondary={null}
						/>
                        <IconButton onClick={() => {
                            dispatch({
                                type: TYPES.REMOVE_PEDIDO,
                                payload: {key: index}
                            });
                        }} edge="end">
							<Delete />
						</IconButton>
					</>
				</ListItemSecondaryAction>
			</ListItem>
		)
	}

    return (
        <Drawer {...props}>
            <List
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                    Lista de produtos
                    </ListSubheader>
                }
            >
                {pedidos.map((produto, key) => (
                    <ProdutoItem key={key} index={key} produto={produto} />
                ))}
            </List>
            <ContainerButton>
                <Button onClick={() => {
                    postPedidos(pedidos.map(pedido => pedido.id)).then((data) => {
                        console.log(data);
                        if (data.status) {
                            dispatch({
                                type: TYPES.REMOVE_ALL,
                                payload: {}
                            });
                            props.onClose();
                            openDialog(data.message);
                        }
                    })
                }} variant="contained" color="primary">Confirmar pedido</Button>
            </ContainerButton>
        </Drawer>
    )
}
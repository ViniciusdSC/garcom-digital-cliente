import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
	ListSubheader,
	Avatar,
	IconButton,
} from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';
import {
	ListItemSecondaryAction
} from './styles';
import { getProdutos } from '~/services/api';

export default function ProdutosList() {
	const [produtos, setProdutos] = useState([]);
	const {push} = useHistory();

	useEffect(() => {
		getProdutos().then(({status, ...rest}) => {
			if (status) {
				setProdutos(rest.data);
			} else {
				console.log(rest.error_message);
			}			
		});
	}, []);

	function ProdutoItem({ produto, onClick }) {
		return (
			<ListItem onClick={onClick} button>
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
						<IconButton edge="end">
							<ChevronRight />
						</IconButton>
					</>
				</ListItemSecondaryAction>
			</ListItem>
		)
	}

	return (
		<List
			subheader={
				<ListSubheader component="div">
					Lista de produtos
        </ListSubheader>
			}
		>
			{produtos.map(produto => (
				<ProdutoItem produto={produto} key={produto.id} onClick={() => {
					push(`/produto/${produto.id}`);
				}} />
			))}
		</List>
	)
}

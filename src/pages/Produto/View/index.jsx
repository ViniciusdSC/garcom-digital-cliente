import React, {useState, useEffect} from 'react';
import {
    ProdutoImg,
    Container,
    Button,
    PageContainer
} from './styles';
import { CircularProgress } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import {getProduto} from '~/services/api';
import {ProgressContainer} from './styles';
import {useDispatch} from 'react-redux';
import {TYPES} from '~/store/reducers/carrinho';

export default function ProdutoView() {
    const [drawer, setDrawer] = useState(false);
    const {id}  = useParams();
    const {goBack} = useHistory();
    const [produto, setProduto] = useState({});
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
		getProduto(id).then(({status, ...rest}) => {     
			if (status) {
				setProduto(rest.data);
			} else {
				console.log(rest.error_message);
            }
            setTimeout(() => {
                setLoading(false);
            })		
		});
    }, []);
    
    if (loading) {
        return (
            <ProgressContainer>
                <CircularProgress />
            </ProgressContainer>
        )
    }

    return (
        <PageContainer>
            <ProdutoImg src={produto.imagem} />
            <Container>
                <h2>{produto.nome}</h2>
                <h4>R$ {produto.preco}</h4>
                <p>
                    {produto.descricao}
                </p>
                
            </Container>
            <Button onClick={() => {
                    dispatch({
                        type: TYPES.ADD_PEDIDO,
                        payload: produto
                    });
                    goBack();
                }} variant="contained" color="primary">
                    Adicionar ao carrinho
            </Button>
            {/* <CarrinhoDrawer open={drawer} anchor="bottom" onClose={() => setDrawer(false)} /> */}
        </PageContainer>
    )
}
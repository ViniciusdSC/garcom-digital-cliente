import React, {useState} from 'react';
import {
    ProdutoImg,
    Container,
    Button
} from './styles';
import CarrinhoDrawer from '~/components/CarrinhoDrawer';

export default function ProdutoView() {
    const [drawer, setDrawer] = useState(false);

    return (
        <div>
            <ProdutoImg src="https://s2.glbimg.com/lL0eM0eKqqCqglxmN5e95cyBzTs=/e.glbimg.com/og/ed/f/original/2019/12/03/beer-filled-mug-on-table-1552630_1.jpg" />
            <Container>
                <h2>Titulo do produto</h2>
                <h4>R$ 32,00</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis laboriosam necessitatibus a recusandae temporibus obcaecati voluptate explicabo fugiat ut repellat officia tenetur ipsam veniam possimus, laborum nulla doloribus sed nemo.
                </p>
                <Button onClick={() => {
                    setDrawer(true);
                }} variant="contained" color="primary">
                    Adicionar ao carrinho
                </Button>
            </Container>
            <CarrinhoDrawer open={drawer} anchor="bottom" onClose={() => setDrawer(false)} />
        </div>
    )
}
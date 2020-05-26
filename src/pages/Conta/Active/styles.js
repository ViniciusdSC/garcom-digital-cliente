import styled from 'styled-components';
import DismissableAlert from '~/components/DismissableAlert';

export const Container = styled.div`
    width: 90%;
    position: relative;
    left: 5%;
    padding-top: 10px;
`;

export const QrCodeImg = styled.img`
    width: 100%;
`;

export const Alert = styled(DismissableAlert)`
    background: green;
`;

export const Title = styled.h3`
    font-size: 15px;
    margin-top: 20px;
`;
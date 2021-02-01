import React from 'react';
import styled from '@emotion/styled';

const MensajeError = styled.p`
    background-color: #b7322c;
    padding: 1rem;
    color: #ffffff;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue',cursive;

`;

const Error = ({error}) => {
    return ( 
        <MensajeError>{error}</MensajeError>
     );
}
 
export default Error;
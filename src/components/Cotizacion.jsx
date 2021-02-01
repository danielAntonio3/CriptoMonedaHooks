import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const ResultadosDiv = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
`;

const Parrafo = styled.p`
    font-size:18px;

    span{
        font-weight:bold;
    }
`;

const Precio = styled.p`
    font-size: 30px;

    span{
        font-weight:bold;
    }
`;



const Cotizacion = ({resulConsulta}) => {
    if(Object.keys(resulConsulta).length === 0) return null;

    console.log(resulConsulta);
    return ( 
        <ResultadosDiv>
            <Precio>El precio es: <span>{resulConsulta.PRICE}</span></Precio>
            <Parrafo>Precio más alto del día: <span>{resulConsulta.HIGHDAY}</span></Parrafo>
            <Parrafo>Precio más najo del día: <span>{resulConsulta.LOWDAY}</span></Parrafo>
            <Parrafo>Variacion ultimas 24 hrs: <span>{resulConsulta.CHANGEPCT24HOUR}</span></Parrafo>
            <Parrafo>Última actualización: <span>{resulConsulta.LASTUPDATE}</span></Parrafo>
        </ResultadosDiv>

     );
}

Cotizacion.propTypes = {
    resulConsulta: PropTypes.object.isRequired

}
 
export default Cotizacion;




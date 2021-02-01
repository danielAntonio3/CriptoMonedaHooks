import React, { Fragment,useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Babes Neue', cursive;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.8rem;
    margin-top: 2rem;
    display:block;
`;

const Select = styled.select`
    width:100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border:none;
    font-size: 1rem;
`;

const useCriptomoneda =(criptomoneda,stateInicial,opcionCripto)=>{

    const [state,actualizarState] = useState(stateInicial);

    const selecionaCriptomoneda= () =>(
        <Fragment>
            <Label>{criptomoneda}</Label>
            <Select
                onChange={ e => actualizarState(e.target.value)}
                value={state}
            >
                <option value="">--Selecione su moneda--</option>
                {opcionCripto.map(opcion=>(
                    <option
                    key={opcion.CoinInfo.Id}
                    value={opcion.CoinInfo.Name}
                    >
                    {opcion.CoinInfo.FullName}
                    </option>
                ))}
            </Select>
        </Fragment>
    );

    //Retornar state, intefaz y la fn que actualiza el state
    return [state, selecionaCriptomoneda,actualizarState];


}


export default useCriptomoneda;
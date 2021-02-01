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

const useMoneda =(moneda,stateInicial,opcionMoneda)=>{

    const [state,actualizarState] = useState(stateInicial);

    const seleciona= () =>(

        <Fragment>
            <Label>{moneda}</Label>
            <Select
                onChange={ e => actualizarState(e.target.value)}
                value={state}
            >
                <option value="">--Selecione su moneda--</option>
                {opcionMoneda.map(opcion=>(
                    <option
                    key={opcion.codigo}
                    value={opcion.codigo}
                    >
                    {opcion.nombre}
                    </option>
                ))}
            </Select>
        </Fragment>
    );

    //Retornar state, intefaz y la fn que actualiza el state
    return [state, seleciona,actualizarState];


}


export default useMoneda;
import React,{useEffect,useState} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from'axios';
import Error from './Error';

const Boton = styled.input`
    margin-top: 20px;
    font-size:20px;
    font-weight:bold;
    padding:10px;
    background-color: #66a2fe;
    border:none;
    width:100%;
    border-radius: 10px;
    color: #ffffff;

    transition: background-color .3s ease;

    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }

`;


const Formulario = ({setMoneda,setCriptomonedas}) => {

    // state de criptomonedas
    const [listacripto,setCriptomoneda]= useState([]);

    // state de error
    const [error,setError]= useState(false);

    const MONEDAS = [
        {codigo:'USD', nombre: 'Dolar Americano'},
        {codigo:'MXN', nombre: 'Perso Mexicano'},
        {codigo:'EUR', nombre: 'Euro'},
        {codigo:'GBP', nombre: 'Libra esterlina'}

    ];

    //USO DEL HOOK DE MONEDA
    const [moneda,InterfazMoneda]= useMoneda('Elige tu moneda:','',MONEDAS);
    //USO DE HOOK DE CRIPTOMONEDA
    const [criptomoneda,InterfazCripto] =useCriptomoneda('Elige tu criptomoneda:','',listacripto);

    //CARGA DE LOS DATOS DESDE LA API

    useEffect(()=>{
        const consultarApi = async()=>{
            const url='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
            setCriptomoneda(resultado.data.Data);
        } 
        consultarApi();

    },[]);

    const cotizarMoneda= e =>{
        e.preventDefault();
        if(moneda === '' || criptomoneda === ''){
            setError(true);
            return;
        }

        setError(false);
        
        // pasamos los valores al componenete principal
        setMoneda(moneda);
        setCriptomonedas(criptomoneda);


    };


    return (  
        <form
        onSubmit={cotizarMoneda}
        >
        
        {error? <Error 
        error='Todos los campos son obligatorios'
        />:null}
            <InterfazMoneda />
            <InterfazCripto />
            <Boton
             type="submit"
             value="Calcular"
            />
        </form>


    );
}
 
Formulario.propTypes = {
    setMoneda: PropTypes.func.isRequired,
    setCriptomonedas: PropTypes.func.isRequired
}

export default Formulario;
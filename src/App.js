import React,{useState,useEffect} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';

const Contenedor= styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 992px){
    display:grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }

`;
const Imagen = styled.img`
    max-width: 100%;
    margin-top: 5rem;
`;

const Heading =styled.h1`
    font-family:'Bebas Neue',cursive;
    color: #fff;
    text-align:left;
    font-weight:700;
    font-size:50px;
    margin-bottom:50px;
    margin-top:80px;

    &::after{
      content: '';
      width:100px;
      height:6px;
      background-color: #66A2FE;
      display:block;

    }

`;


function App() {

  //ocupado para saber que moneda selecciono
  const [moneda,setMoneda]= useState('');
  
  //ocupado para saber que criptomoneda selecciono
  const [criptomoneda,setCriptomonedas]= useState('');
  
  //ocupado para guardar el resultado que arroja la api 
  const [resulConsulta,setResulConsulta] = useState({});

  //ocupado para saber cuando mostrar el spinner
  const [cargar,setcargar] = useState(false);


    useEffect(()=>{
    
    
    // consultar api
      const consultarApi = async()=>{
      
        // es para evitar que consulte la primera vez
        if(moneda === ''){ 
          return;
        }

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    
        const resultados = await axios.get(url);

        //actualizamos el state del spinner
        setcargar(true);

        //ocultamos el Spinner
        setTimeout(() => {
          setcargar(false);
          setResulConsulta(resultados.data.DISPLAY[criptomoneda][moneda]);
        },3000);
      
      }
      consultarApi();
    
    },[moneda,criptomoneda]);



  return (
     <Contenedor>
       <div>
         <Imagen 
            src={imagen}
            alt="imagen cripto"
         />
       </div>
       <div>
          <Heading>Cotiza criptomonedas</Heading>

          <Formulario 
            setMoneda={setMoneda}
            setCriptomonedas={setCriptomonedas}
          />
          {cargar? <Spinner />:
          <Cotizacion
            resulConsulta={resulConsulta}
          />}
       </div>
       
     </Contenedor>
  );
}

export default App;

import { createContext, useState, useEffect } from "react";
import api from '../api/api'

const TotalContext = createContext({});


function TotalContextProvider({children}){
  const [entrada, setEntrada] = useState([])
  const [saida, setSaida] = useState([])

  useEffect(()=>{
    api.get('entrada').then((data)=>{
      setEntrada(data.data)
     })
  },[])

const filtro = entrada.filter((num)=> num.preco).map((numb)=> Number(numb.preco))
const total = filtro.reduce((acc, cur)=> acc + cur, 0).toFixed(2);


const seletEntrada = async (id_1)=> {
    await api.delete(`entrada/${id_1}`)
    alert('Registro apagado')||window.location.reload(true)
  }




useEffect(()=>{
  api.get('saida').then((data)=>{
    setSaida(data.data)
   })
},[])

const filtroSaida = saida.filter((num)=> num.preco).map((numb)=> Number(numb.preco))
const totalSaida = filtroSaida.reduce((acc, cur)=> acc + cur, 0).toFixed(2);


const seletSaida = async (id_2)=> {
  await api.delete(`saida/${id_2}`)
  alert('Registro apagado')||window.location.reload(true)
}

//Soma total de entrada e saida
const soma = Math.abs(totalSaida - total).toFixed(2);

    
      return(
       <TotalContext.Provider 
        value={{entrada, seletEntrada, saida, seletSaida, total, totalSaida, soma}}>
                {children}
       </TotalContext.Provider>)}
        export{TotalContextProvider, TotalContext}
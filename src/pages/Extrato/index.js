import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import React,{useState, useEffect} from 'react';
import api from '../../api/api'

export default function Extrato() {
  const [entrada, setEntrada] = useState([])
  const [saida, setSaida] = useState([])
  useEffect(()=>{
    api.get('saida').then((data)=>{
      setSaida(data.data)
     })
  },[])
  
useEffect(()=>{
  api.get('entrada').then((data)=>{
    setEntrada(data.data)
   })
},[])
  return (
    <LinearGradient
        colors={['#2A4759', '#fff']}style={styles.container}>
      <Text>Extrato</Text>
      {entrada.map(item=>(
      <View key={item.id_1}>
        <Text>Entradas</Text>
       <Text >{item.titulo}</Text>
       <Text  >{item.preco}</Text>
       </View>
    ))}
     {saida.map(item=>(
      <View key={item.id_2}>
        <Text>Saidas</Text>
       <Text >{item.titulo}</Text>
       <Text  >{item.preco}</Text>
       </View>
    ))}
     
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

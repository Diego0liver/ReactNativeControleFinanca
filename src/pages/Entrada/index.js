import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import api from '../../api/api'




export default function Entrada() {

  const [entrada, setEntrada] = useState([])

useEffect(()=>{
  api.get('entrada').then((data)=>{
    setEntrada(data.data)
   })
},[])


  return (
    <LinearGradient
        colors={['#2A4759', '#fff']}
        style={styles.container}>
    <Text style={styles.text} >Entradas</Text>
    {entrada.map(item=>(
      <View key={item.id_1}>
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
  text:{
  color: '#fff',
  fontSize: 50,
  fontWeight: 'bold'
  }
});

import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import api from '../../api/api'

export default function Saida() {

const [saida, setSaida] = useState([])
useEffect(()=>{
  api.get('saida').then((data)=>{
    setSaida(data.data)
   })
},[])


  return (
    <LinearGradient
    colors={['#2A4759', '#fff']} style={styles.container}>
      <Text>Saida</Text>
      {saida.map(item=>(
      <View key={item.id_2}>
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

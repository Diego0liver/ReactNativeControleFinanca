import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import api from '../../api/api'

export default function Saida() {

const [saida, setSaida] = useState([])
useEffect(()=>{
  api.get('saida').then((data)=>{
    setSaida(data.data)
   })
},[])

const seletSaida = async (id_2)=> {
  await api.delete(`saida/${id_2}`)
  alert('Registro apagado')||window.location.reload(true)
}


  return (
    <LinearGradient
    colors={['#2A4759', '#fff']} style={styles.container}>
      <Text style={styles.text} >Saida</Text>
      {saida.map(item=>(
      <View style={styles.cont} key={item.id_2}>
       <Text style={styles.textCont} >{item.titulo}</Text>
       <Text style={styles.textPreco} >R$ {item.preco}</Text>
       <View style={styles.lixo}>
        <TouchableOpacity onPress={() => {seletSaida(item.id_2)}}>
         <Image
         source={require('../../img/lixo.png')}
         style={{ width: 40, height: 40, marginTop: -20 }} 
         />
        </TouchableOpacity>
       </View>
       </View>
    ))}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text:{
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold'
    },
    cont:{
      backgroundColor: '#B4CED9',
      margin: 5,
      padding: 5,
      borderRadius: 8,
      borderTopColor: '#2A4759',
      borderColor: '#B4CED9',
      borderWidth: 5,
    },
    textCont:{
      fontSize: 30,
      color: '#687E8C',
     fontWeight: 'bold',
    }, 
    textPreco:{
      fontSize: 33,
      fontWeight: 'bold',
    color: '#2A4759',
    },
    lixo:{
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
     },
});

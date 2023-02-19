import React,{useContext} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TotalContext } from '../../context/index'



export default function Entrada() {
  const { entrada, seletEntrada  } = useContext(TotalContext)  

  return (
    <LinearGradient
        colors={['#2A4759', '#fff']}
        style={styles.container}>
    <Text style={styles.text} >Entradas</Text>
    {entrada.map(item=>(
      <View style={styles.cont} key={item.id_1}>
       <Text style={styles.textCont} >{item.titulo}</Text>
       <Text  style={styles.textPreco} >R$ {item.preco}</Text>
       <View style={styles.lixo}>
       <TouchableOpacity onPress={() => {seletEntrada(item.id_1)}}>
       <Image source={require('../../img/lixo.png')}
       style={{ width: 40, height: 40,  marginTop: -20}}></Image>
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
  lixo:{
   alignItems: 'flex-end',
   justifyContent: 'flex-end'
  },
  textPreco:{
    fontSize: 33,
    fontWeight: 'bold',
  color: '#2A4759',
  }
});

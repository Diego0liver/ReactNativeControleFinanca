import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import React,{useContext} from 'react';
import { TotalContext } from '../../context/index'


export default function Extrato() {
  const { saida, entrada, soma, totalSaida, total } = useContext(TotalContext) 
 
  
  return (
    <LinearGradient
        colors={['#2A4759', '#fff']}style={styles.container}>
      <Text style={styles.text} >Extrato</Text>
      <Text style={styles.txt}>Entradas</Text>
      {entrada.map(item=>(
      <View style={styles.cont} key={item.id_1}>
       <Text style={styles.textCont} >{item.titulo}</Text>
       <Text style={styles.textCont} >R$ {item.preco}</Text>
       </View>
    ))}
     <Text style={styles.txt}>Saidas</Text>
     {saida.map(item=>(
      <View style={styles.cont} key={item.id_2}>
       <Text style={styles.textCont} >{item.titulo}</Text>
       <Text style={styles.textCont} >R$ {item.preco}</Text>
       </View>
    ))}
     <View>
      <Text style={styles.txt}>Total: 
      {`${Number(totalSaida) > Number(total) ? " -" : ""}${soma}`}
      </Text>
     </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text:{
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold'
    },
  txt:{
    color: '#fff',
    fontSize: 20,
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
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textCont:{
    fontSize: 20,
    color: '#2A4759',
   fontWeight: 'bold',
  },
});

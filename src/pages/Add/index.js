import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, TextInput, Button, RefreshControl } from 'react-native';
import React,{useState} from 'react';
import api from '../../api/api'

export default function Add() {
    const [text, setText] = useState('');
    const [preco, setPreco] = useState('');

  const handleInputChange = (value) => {
    setText(value);
  };
 const handleInputChangePreco = (value) => {
  setPreco(value);
  };
  function cria(){
    if(text && preco){
     api.post('entrada', {
      titulo: text,
      preco: preco
    }).then(alert('OK')||window.location.reload(true))
   
}else{alert("Preencha todos os campos")}
}




  return (
    <LinearGradient colors={['#fff', 'tomato']}
    style={styles.container}>
      <Text style={styles.titulo}>Adiciona uma entrada ou saida</Text>
      <Text style={styles.texto}>Titulo</Text>
      <TextInput value={text} onChangeText={handleInputChange} style={styles.input}></TextInput>
      <Text style={styles.texto}>Valor</Text>
      <TextInput value={preco} onChangeText={handleInputChangePreco} keyboardType="numeric"  style={styles.input}></TextInput>
      <View style={styles.buttons}>
      <Button onPress={cria} style={styles.btn} color='#2A4759' title='Entrada'></Button>
      <Button title='Saida' color='#ff6347' ></Button>
      </View>
     
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },input: {
     width:300,
     borderWidth:2,
     borderColor: 'tomato',
     padding: 10,
     margin: 10,
     borderRadius: 10
  },
  buttons:{
    width: '40%',
   flexDirection: 'row',
   justifyContent: 'space-between'
  },
  titulo:{
    fontSize: 25,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#2A4759'
  },
  texto:{
    color: '#2A4759',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20
  }
});

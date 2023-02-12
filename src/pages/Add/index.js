import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Add() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Adiciona uma entrada ou saida</Text>
      <Text style={styles.texto}>Titulo</Text>
      <TextInput  style={styles.input}></TextInput>
      <Text style={styles.texto}>Valor</Text>
      <TextInput  keyboardType="numeric"  style={styles.input}></TextInput>
      <View style={styles.buttons}>
      <Button style={styles.btn} color='#2A4759' title='Entrada'></Button>
      <Button title='Saida' color='#ff6347' ></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Entrada() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Entradas</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
  color: '#fff',
  fontSize: 50,
  fontWeight: 'bold'
  }
});

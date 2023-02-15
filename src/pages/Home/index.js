import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image } from 'react-native';



export default function Home() {
  return (
    <LinearGradient
        colors={['#2A4759', '#fff']}
        style={styles.container}>
      <Text style={styles.titulo}>Controle financeiro</Text>
      <View style={styles.quadrado}>
      <Text style={styles.texto}>Total:</Text>
      <Text style={styles.preco}>R$ 222,20</Text>
      <Image source={require('../../img/money.png')}
       style={{ width: 35, height: 35 }}></Image>
      </View>
      <View style={styles.quadrado}>
      <Text style={styles.texto}>Entrada:</Text>
      <Text style={styles.preco}>R$ 200,20</Text>
      <Image source={require('../../img/enter.png')}
       style={{ width: 35, height: 35 }}></Image>
      </View>
      <View style={styles.quadrado}>
      <Text style={styles.texto}>Saida:</Text>
      <Text style={styles.preco}>R$ 200,20</Text>
      <Image source={require('../../img/saida.png')}
       style={{ width: 35, height: 35 }}></Image>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quadrado:{
    height: 150,
    width: '98%',
    backgroundColor: '#B4CED9',
    marginTop: 10,
    borderRadius: 8,
    borderTopColor: '#2A4759',
    borderColor: '#B4CED9',
    borderWidth: 5,
  },
  titulo:{
  fontSize:20,
  marginTop: 50,
  textAlign: 'center',
  color: '#fff',
  fontWeight: 'bold'
  },
  preco:{
  fontSize: 50,
  fontWeight: 'bold',
  color: '#2A4759',
  textAlign: 'center',
  },
  texto:{
  fontSize: 30,
  textAlign: 'center',
  color: '#687E8C',
   fontWeight: 'bold',
  }

});

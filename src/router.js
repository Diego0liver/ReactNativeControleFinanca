import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Entypo} from '@expo/vector-icons'

import Home from './pages/Home'
import Entrada from './pages/Entrada'
import Add from './pages/Add'
import Saida from './pages/Saida'
import Extrato from './pages/Extrato'


const NevBar = createBottomTabNavigator()

export default function Router(){
    return(
        <NevBar.Navigator 
        screenOptions={() => ({
            headerShown: false,
            tabBarStyle: {
              height: 90,
              paddingHorizontal: 5,
              paddingBottom: 10,
              backgroundColor: 'rgba(34,36,40,1)',
              borderTopWidth: 0,
          }, tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        >
            <NevBar.Screen name='Home' component={Home}
             options={{
                tabBarIcon: ({size, color}) => (
                       <Entypo name='home' size={size} color={color} />
                )
                }}  />
            <NevBar.Screen name='Entrada' component={Entrada}
           options={{
            tabBarIcon: ({size, color}) => (
                <Entypo name="arrow-with-circle-up" size={size} color={color} />
            )
            }} />
            <NevBar.Screen name='Add' component={Add}
              options={{
                tabBarIcon: ({size, color}) => (
                    <Entypo name="squared-plus" size={size} color={color} />
                )
                }}
             />
            <NevBar.Screen name='Saida' component={Saida}
             options={{
                tabBarIcon: ({size, color}) => (
                    <Entypo  name="arrow-with-circle-down" size={size} color={color} />
                )
                }}
             />
            <NevBar.Screen name='Extrato' component={Extrato}
             options={{
                tabBarIcon: ({size, color}) => (
                    <Entypo  name="news" size={size} color={color} />
                )
                }} />
        </NevBar.Navigator>
    )
}
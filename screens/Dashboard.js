import React from 'react'
import { View } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { IonButton } from '../components/IonButton'

export function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Bienvenido a la tienda de fútbol</Header>
      <Paragraph>
        Encuentra los mejores artículos para tu pasión. Equipos, balones, botas y más.
      </Paragraph>

      <View style={{
        flexDirection:'row'
      }}>
        <IonButton 
          onPress={ () => navigation.navigate('Products') } // Cambié a "Products" para mostrar productos de fútbol
          text='Ver productos'
          name='football' 
        />
        <IonButton 
          name='person' 
          text='Mi cuenta' 
          onPress={ () => navigation.navigate('Profile') } 
        />
        <IonButton 
          text='Carrito' 
          name='cart' 
          onPress={ () => navigation.navigate('Cart') } 
        />
      </View>

      <View style={{
        flexDirection:'row'
      }}>
        <IonButton 
          text='Ofertas' 
          name='pricetag'
          onPress={ () => navigation.navigate('Offers') } 
        />
        <IonButton
          text='Novedades' 
          name='newspaper'
          onPress={ () => navigation.navigate('NewArrivals') } 
        />
        <IonButton
          text='Articulos Registrados' 
          name='RegisteredItems'
          onPress={ () => navigation.navigate('RegisteredItems') } 
        />
      </View>

      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Cerrar sesión
      </Button>
    </Background>
  )
}


import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';

import { useFetch } from '../hooks/useFetch';

export function CartScreen({ navigation }) {
  const [cartItems, setCartItems] = useState([]);
  const { getData } = useFetch();

  const getCartItems = async() => {
    const items = await getData('http://localhost:3000/api/cart');
    if (items.error) return;
    setCartItems(items.data);
  }

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Carrito de Compras</Header>
      {cartItems.length === 0 ? (
        <Text>No hay artículos en el carrito</Text>
      ) : (
        cartItems.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text>{item.name} - {item.quantity}</Text>
          </View>
        ))
      )}
      <Button
        mode="contained"
        style={{ marginTop: 24 }}
        onPress={() => alert('Compra realizada')}
      >
        Comprar
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 4,
    backgroundColor: theme.colors.surface,
    borderRadius: 5,
  },
});


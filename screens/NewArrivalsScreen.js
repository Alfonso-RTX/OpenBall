import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { theme } from '../core/theme'

export const NewArrivalsScreen = () => {
  const [newArrivals, setNewArrivals] = useState([])

  // Datos de ejemplo de artículos nuevos
  const fetchNewArrivals = () => {
    setNewArrivals([
      { 
        id: '1', 
        name: 'Balón Nike Pro', 
        description: 'Balón de fútbol profesional de alta calidad diseñado para uso en competiciones de alto nivel.',
        price: '$45.99',
        available: 'En stock',
        features: [
          'Material: Goma de alta resistencia',
          'Tamaño: 5',
          'Aprobado por FIFA'
        ]
      },
      { 
        id: '2', 
        name: 'Camiseta Adidas F50', 
        description: 'Camiseta de fútbol con tecnología climacool que mantiene la frescura durante el juego.',
        price: '$29.99',
        available: 'En stock',
        features: [
          'Material: Poliéster reciclado',
          'Tecnología climacool',
          'Disponible en diferentes tallas'
        ]
      },
      { 
        id: '3', 
        name: 'Botines Puma Future', 
        description: 'Botines de fútbol diseñados para máximo control y velocidad en el campo.',
        price: '$89.99',
        available: 'En stock',
        features: [
          'Suela: Spikes adaptables',
          'Material: Sintético',
          'Ideal para terrenos duros'
        ]
      }
    ])
  }

  useEffect(() => {
    fetchNewArrivals()
  }, [])

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.itemPrice}>Precio: {item.price}</Text>
      <Text style={styles.itemAvailability}>Disponibilidad: {item.available}</Text>
      <Text style={styles.featuresHeader}>Características:</Text>
      {item.features.map((feature, index) => (
        <Text key={index} style={styles.itemFeature}>- {feature}</Text>
      ))}
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Novedades</Text>
      <FlatList
        data={newArrivals}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: theme.colors.background,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: theme.colors.primary,
  },
  itemContainer: {
    marginBottom: 20,
    backgroundColor: theme.colors.surface,
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: theme.colors.divider,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  itemDescription: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginTop: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.accent,
    marginTop: 10,
  },
  itemAvailability: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginTop: 5,
  },
  featuresHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  itemFeature: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginLeft: 10,
  },
})
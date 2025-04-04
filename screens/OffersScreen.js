import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';

import { useFetch } from '../hooks/useFetch';
import { textValidator } from '../helpers/textValidator';
import { numberValidator } from '../helpers/numberValidator'; // Importamos la nueva función

export function OffersScreen({ navigation }) {
  const [title, setTitle] = useState({ value: '', error: '' });
  const [description, setDescription] = useState({ value: '', error: '' });
  const [discount, setDiscount] = useState({ value: '', error: '' });
  const { setData } = useFetch();

  const onAddOffer = async () => {
    // Validaciones de entrada
    const titleError = textValidator(title.value);
    const descriptionError = textValidator(description.value);
    const discountError = numberValidator(discount.value); // Usamos numberValidator aquí

    if (titleError || descriptionError || discountError) {
      setTitle({ ...title, error: titleError });
      setDescription({ ...description, error: descriptionError });
      setDiscount({ ...discount, error: discountError });
      return;
    }

    try {
      // Crear objeto de nueva oferta
      const newOffer = {
        title: title.value,
        description: description.value,
        discount: parseFloat(discount.value), // Convertir descuento a número
      };

      console.log('Nueva oferta:', newOffer);

      // Llamar al backend para agregar la oferta
      const response = await setData('http://localhost:3000/api/offers/add', newOffer);

      if (response.error) {
        alert(`Error: ${response.error}`);
        return;
      }

      // Limpiar campos después de agregar la oferta
      setTitle({ value: '', error: '' });
      setDescription({ value: '', error: '' });
      setDiscount({ value: '', error: '' });

      alert('Oferta agregada exitosamente');
    } catch (error) {
      console.error('Error al agregar la oferta:', error);
      alert('Ocurrió un error al agregar la oferta. Por favor, intenta nuevamente.');
    }
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Registrar oferta de fútbol</Header>

      {/* Campo de Título */}
      <TextInput
        label="Título"
        returnKeyType="next"
        value={title.value}
        onChangeText={(text) => setTitle({ value: text, error: '' })}
        error={!!title.error}
        errorText={title.error}
      />

      {/* Campo de Descripción */}
      <TextInput
        label="Descripción"
        returnKeyType="next"
        value={description.value}
        onChangeText={(text) => setDescription({ value: text, error: '' })}
        error={!!description.error}
        errorText={description.error}
      />

      {/* Campo de Descuento */}
      <TextInput
        label="Descuento"
        returnKeyType="done"
        keyboardType="numeric" // Permitir solo entrada numérica
        value={discount.value}
        onChangeText={(text) => setDiscount({ value: text, error: '' })}
        error={!!discount.error}
        errorText={discount.error}
      />

      {/* Botón para agregar oferta */}
      <Button
        mode="contained"
        style={{ marginTop: 24 }}
        onPress={onAddOffer}
      >
        Agregar Oferta
      </Button>
    </Background>
  );
}

// Estilos (no utilizados actualmente, pero mantenidos por si son necesarios en el futuro)
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
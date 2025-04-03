import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';

import { useFetch } from '../hooks/useFetch';

export function ProfileScreen({ navigation }) {
  const [userData, setUserData] = useState({ name: '', email: '', phone: '' });

  const { getData } = useFetch();

  // Obtener los datos del perfil
  const getProfileData = async () => {
    const response = await getData('http://localhost:3000/api/users/profile');
    if (response.error) return;
    setUserData(response.data);
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Perfil de Usuario</Header>
      <View style={styles.profileContainer}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.info}>{userData.name}</Text>
        <Text style={styles.label}>Correo:</Text>
        <Text style={styles.info}>{userData.email}</Text>
        <Text style={styles.label}>Teléfono:</Text>
        <Text style={styles.info}>{userData.phone}</Text>
      </View>
      <Button mode="contained" style={{ marginTop: 24 }} onPress={() => alert('Editar perfil')}>Editar Perfil</Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    padding: 20,
    backgroundColor: theme.colors.surface,
    borderRadius: 8,
    marginVertical: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 4,
  },
  info: {
    fontSize: 18,
    marginBottom: 8,
  },
});

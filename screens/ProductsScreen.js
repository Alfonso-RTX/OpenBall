import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'

import { useFetch } from '../hooks/useFetch';
import { CustomDropDownList } from '../components/CustomDropDownList'
import { textValidator } from '../helpers/textValidator'
import { listValidator } from '../helpers/listValidator'

export function ProductsScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [description, setDescription] = useState({ value: '', error: '' } )
  const [itemType, setItemType] = useState({ value: '', error: '' })
  const [itemStatus, setItemStatus] = useState({ value: '', error: '' })
  const [itemLocation, setItemLocation] = useState({ value: '', error: '' })
  const [onSale, setOnSale] = useState({ value: '', error: '' })

  const [locations, setLocations] = useState([
    {title:'Almacen'},
    {title:'Recepción'},
  ]);

  const itemTypes = [
    {title:'Playeras, shorts o tenis'},
    {title:'Balones'},
    {title:'Otros'},
  ];

  const itemState = [
    {title:'Sin determinar'},
    {title:'Mal estado'},
    {title:'Regular'},
    {title:'Buen estado'},
    {title:'Excelente estado'},
  ]

  const saleOptions = [
    { title: 'Sí' },
    { title: 'No' }
  ];

  const { getData, setData } = useFetch();

  const getLocations = async() => {
    const locations = await getData('http://localhost:3000/api/locations/all');
    if (locations.error) return;
    const { data } = locations;
    if (data.length>0) {
      const ubicaciones = [];
      data.map( (location) => {
        ubicaciones.push({
          title: `${ location.building } - ${ location.department }`
        })
      });
      setLocations(ubicaciones);
    }
  }

  const onRegisterPressed = async() => {
    const nameError = textValidator( name.value );
    const descriptionError = textValidator( description.value )
    const itemTypeError = listValidator( itemType.value )
    const itemStatusError = listValidator( itemStatus.value )
    const itemLocationError = listValidator( itemLocation.value )
    const onSaleError = listValidator( onSale.value )

    if (nameError || descriptionError || itemTypeError || itemStatusError || itemLocationError || onSaleError ) {
      setName({...name, error: nameError})
      setDescription({...description, error: descriptionError})
      setItemType({ ...itemType, error: itemTypeError })
      setItemStatus({ ...itemStatus, error: itemStatusError })
      setItemLocation({ ...itemLocation, error: itemLocationError })
      setOnSale({ ...onSale, error: onSaleError })
      return
    }

    const newItem = {
      name: name.value,
      type: itemType.value,
      description: description.value,
      state: itemStatus.value,
      location: itemLocation.value,
      onSale: onSale.value
    }
    console.log(newItem);
    const item = await setData('http://localhost:3000/api/items/add', newItem);
    console.log(item);
    if (item.error) return;
    alert("Artículo agregado")
  }

  useEffect(() => {
    getLocations();
  }, [])

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Registrar objeto de fútbol</Header>
      <TextInput
        label="Nombre"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <CustomDropDownList
        items={ itemTypes }
        defaultText='Tipo de objeto de fútbol'
        errorText={ itemType.error }
        setValue={ setItemType }
      />
      <CustomDropDownList
        items={ itemState }
        defaultText='Estado del objeto de fútbol'
        errorText={ itemStatus.error }
        setValue={ setItemStatus }
      />
      <CustomDropDownList
        items={ locations }
        defaultText='Ubicación del objeto de fútbol'
        errorText={ itemLocation.error }
        setValue={ setItemLocation }
      />
      <CustomDropDownList
        items={ saleOptions }
        defaultText='¿Tiene oferta?'
        errorText={ onSale.error }
        setValue={ setOnSale }
      />
      <TextInput
        label="Descripción"
        returnKeyType="next"
        value={ description.value }
        onChangeText={(text) => setDescription({ value: text, error: '' })}
        error={!!description.error}
        errorText={description.error}
        autoCapitalize="none"
        autoCompleteType="none"
        textContentType="none"
        keyboardType="text"
      />
      <Button
        mode="contained"
        style={{ marginTop: 24 }}
        onPress={() => onRegisterPressed()}
      >
        Agregar
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  }
})
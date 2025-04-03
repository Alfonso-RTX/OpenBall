import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Button({ mode, style, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: theme.colors.surface, borderColor: theme.colors.primary },
        style,
      ]}
      labelStyle={[
        styles.text,
        mode === 'outlined' && { color: theme.colors.primary }
      ]}
      mode={mode}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'salmon', // Color del botón en salmón
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    color: 'white', // Texto en color blanco
  },
})

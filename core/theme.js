import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000', // Texto en negro para los elementos generales
    primary: '#FF5722', // Naranja brillante para representar la energía del fútbol
    secondary: '#4CAF50', // Verde para evocar el césped del campo
    background: '#F5F5F5', // Fondo claro para que todo resalte
    surface: '#FFFFFF', // Superficie blanca para formularios y tarjetas
    error: '#F44336', // Rojo para errores y alertas
    accent: '#FFEB3B', // Amarillo dorado para botones y llamadas a la acción
    border: '#FF5722', // Bordes en naranja para que se resalten sobre el fondo claro
  },
};

// helpers/numberValidator.js

export function numberValidator(number) {
    // Expresión regular para validar números enteros o decimales
    const regex = /^\d+(\.\d+)?$/;
  
    if (!number || number.trim() === '') {
      return 'Este campo es obligatorio.';
    }
  
    if (!regex.test(number)) {
      return 'Por favor, ingresa un número válido.';
    }
  
    // Opcional: Validar que el descuento esté en un rango razonable (ejemplo: entre 0 y 100)
    const numericValue = parseFloat(number);
    if (numericValue < 0 || numericValue > 100) {
      return 'El descuento debe estar entre 0 y 100.';
    }
  
    return '';
  }
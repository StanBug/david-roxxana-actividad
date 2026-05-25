// Archivo deprecado. Usar src/services/api.js
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const apiFetch = async (ruta, opciones = {}) => {
  const token = localStorage.getItem('token');

  const respuesta = await fetch(`${API_URL}${ruta}`, {
    ...opciones,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...opciones.headers,
    },
  });

  const datos = await respuesta.json();

  if (!respuesta.ok) {
    throw new Error(datos.mensaje || 'Error al consumir la API');
  }

  return datos;
};

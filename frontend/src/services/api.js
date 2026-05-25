const BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const getToken = () => localStorage.getItem('edu_token');

export async function apiObtenerPerfil(token) {
  const res = await fetch(`${BASE}/usuario/perfil`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.mensaje || 'Error al obtener perfil.');
  return data.usuario;
}
export async function apiLogin(email, password) {
  if (email === 'demo@edustrategy.com' && password === 'Demo123') {
    return {
      token: 'demo-token',
      usuario: {
        nombre: 'David',
        email,
        rol: 'estudiante',
      },
    };
  }

  throw new Error('Credenciales inválidas');
}
export async function apiFetchDashboard() {
  return {
    semestreActivo: '2025-1',
    totalAsignaturas: 2,
    promedioGeneral: 4.5,
    tiempoTotal: 120,
    asignaturas: [
      {
        id_asignatura: 1,
        nombre: 'Diseño Web',
        nombre_docente: 'Profesor Demo',
        nota: 4.2,
      },
      {
        id_asignatura: 2,
        nombre: 'Bases de Datos',
        nombre_docente: 'Profesor Demo',
        nota: 4.7,
      },
    ],
  };
}
export async function apiCrearAsignatura(datos) {
  const res = await fetch(`${BASE}/asignaturas`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(datos),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.mensaje || 'Error al crear asignatura.');
  return data.asignatura; // { id_asignatura, id_semestre, nombre, nombre_docente }
}

export async function apiActualizarAsignatura(id, datos) {
  const res = await fetch(`${BASE}/asignaturas/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(datos),
  });
  const data = await res.json();
  if (!res.ok)
    throw new Error(data.mensaje || 'Error al actualizar asignatura.');
  return data.asignatura; // { id_asignatura, id_semestre, nombre, nombre_docente }
}

export async function apiCrearSemestre(datos) {
  const res = await fetch(`${BASE}/semestres`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(datos),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.mensaje || 'Error al crear semestre.');
  return data.semestre;
}

export async function apiListarTiposActividad() {
  const res = await fetch(`${BASE}/hitos/tipos`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  const data = await res.json();
  if (!res.ok)
    throw new Error(data.mensaje || 'Error al cargar tipos de actividad.');
  return data;
}

export async function apiListarHitos(idAsignatura) {
  const res = await fetch(`${BASE}/hitos/${idAsignatura}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.mensaje || 'Error al cargar hitos.');
  return data;
}

export async function apiCrearHito(idAsignatura, datos) {
  const res = await fetch(`${BASE}/hitos/${idAsignatura}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(datos),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.mensaje || 'Error al crear hito.');
  return data.hito;
}

export async function apiActualizarHito(idHito, datos) {
  const res = await fetch(`${BASE}/hitos/${idHito}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(datos),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.mensaje || 'Error al actualizar hito.');
  return data.hito;
}

export async function apiEliminarHito(idHito) {
  const res = await fetch(`${BASE}/hitos/${idHito}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.mensaje || 'Error al eliminar hito.');
}

export async function apiActualizarPerfil(datos) {
  const res = await fetch(`${BASE}/usuario/perfil`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(datos),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.mensaje || 'Error al actualizar perfil.');
  return data.usuario;
}

export async function apiObtenerHistorialSemestres() {
  const res = await fetch(`${BASE}/usuario/semestres`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.mensaje || 'Error al obtener semestres.');
  return data.semestres;
}

export async function apiSubirFoto(file) {
  const formData = new FormData();
  formData.append('foto', file);
  const res = await fetch(`${BASE}/usuario/foto`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${getToken()}` },
    body: formData,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.mensaje || 'Error al subir foto.');
  return data; // { mensaje, foto_url }
}

export async function apiEliminarCuenta() {
  const res = await fetch(`${BASE}/usuario/cuenta`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.mensaje || 'Error al eliminar cuenta.');
  return data;
}

export async function apiEliminarAsignatura(id) {
  const res = await fetch(`${BASE}/asignaturas/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.mensaje || 'Error al eliminar asignatura.');
}

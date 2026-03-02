# Trabajo Práctico 3 - Módulo 3

## 📋 Descripción General

Este proyecto contiene actividades prácticas relacionadas con:
- Desarrollo de servidores con **Express.js**
- Manejo de parámetros de ruta y consulta en HTTP
- Lectura y escritura de archivos con **Node.js**
- Uso de módulos personalizados en JavaScript

---

## 🚀 Actividades

### Actividad 1: Parámetros de Ruta

Demuestra el uso de **parámetros de ruta dinámicos** en Express.

**Ruta disponible:**
- `GET /user/:id` - Retorna el perfil de un usuario según su ID

**Ejemplo de uso:**

### Solicitud
curl http://localhost:3000/user/123

### Respuesta
Perfil del usuario con ID: 123

El servidor estará disponible en `http://localhost:3000`

---

### Actividad 2: Parámetros de Consulta

**Ubicación:** 

Demuestra el uso de **parámetros de consulta** (query parameters) en Express.

**Ruta disponible:**
- `GET /profile?edad=<valor>` - Retorna el perfil con la edad especificada

**Ejemplo de uso:**

# Solicitud
curl "http://localhost:3000/profile?edad=30"

# Respuesta
Edad del perfil: 30

El servidor estará disponible en `http://localhost:3000`

---

## Ejemplos

### Ejemplo: Servidor Básico

**Ubicación:** `ejemplo-servidor-basico/`

Un ejemplo simple que muestra los conceptos básicos de crear un servidor en Node.js.

---

### Ejemplo: Gestión de Superhéroes

**Ubicación:** `ejemplo-superheroes/`

Un ejemplo que demuestra:
- **Lectura y escritura de archivos** usando el módulo `fs`
- **Definición de clases** en JavaScript
- **Uso de módulos personalizados**
- **Ordenamiento y manipulación** de datos

---

## 📦 Dependencias

Todas las actividades y ejemplos usan las siguientes dependencias:

- **Express.js** - Framework web para Node.js
- **Node.js File System (fs)** - Módulo nativo para manejo de archivos

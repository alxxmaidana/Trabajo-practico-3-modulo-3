// ===============================
// Ruteo Básico con Express
// ================================

import express from "express";

//  Crear una instancia de express
const app = express();

// Configurar el puErto en el que el servidor escuchará
const PORT = 3000;

// Ruta básica
app.get("/", (res) => {
    res.send("¡Hola, mundo!");
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Ruta GET para el home
// solicitud: http://localhost:3000
app.get("/", (res) => {
    res.send("Pagina de inicio");
});

// Ruta GET para recibir datos simples
// solicitud: http://localhost:3000/data
app.get("/data", (res) => {
    res.send("Datos recibidos");
});

// =================================
// Ruteo con parámetros
// =================================

// Ruta GET con parámetro de ruta
// Solicitud: http://localhost.3000/user/123
app.get("/user/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`Perfil de usuario con ID: ${userId}`);
});

// Ruta GET con multiples parámetros
// Solicitud http://localhost:3000/product/electronics/456
app.get("/product/:category/:id", (req, res) => {
    const { catagory, id } = req.params;
    res.send(`Categoría: ${catagory}, ID del produdcto: ${id}`);
});

// =================================
// Ruteo con consultas
// =================================

// Ruta GET con parámetros de consulta
// Solicitud: http://localhost:3000/search?q=javascript
app.get("/search", (req, res) => {
    const query = req.query.q;
    res.send("Resultados de búsqueda:", query);
});

// Ruta GET con multiples parámetros de consulta
// Solicitud: http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50
app.get("/filter", (req, res) => {
    const { type, minPrice, maxPrice } = req.query;
    res.send(
        `Filtrar por tipo: ${type}, rango de precios: ${minPrice} - ${maxPrice}`,
    );
});

const express = require('express');
const productos = require('./productos.json');
const clientes = require("./clientes.json")
const app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

// Ruta para obtener todos los productos
app.get('/productos', (req, res) => {
  res.json(productos);
});

// Ruta para obtener un producto por ID
app.get('/productos/:id', (req, res) => {
  const producto = productos.find(p => p.id === parseInt(req.params.id));
  if (!producto) {
    res.status(404).send('Producto no encontrado');
  } else {
    res.json(producto);
  }
});

app.get('/clientes', (req, res) => {
    res.json(clientes);
  });
  
  // Ruta para obtener un producto por ID
  app.get('/clientes/:id', (req, res) => {
    const cliente = clientes.find(p => p.id === parseInt(req.params.id));
    if (!cliente) {
      res.status(404).send('Cliente no encontrado');
    } else {
      res.json(cliente);
    }
  });

app.listen(3000, () => {
  console.log('API iniciada en el puerto 3000');
});

const express = require('express');
const router = express.Router();

let products = [
  { id: 1, name: "Manzana", price: 0.7, stock: 30, category: "Frutas" },
  { id: 2, name: "Destornillador", price: 12.5, stock: 29, category: "Herramientas" },
  { id: 3, name: "Banana", price: 0.6, stock: 23, category: "Frutas" },
  { id: 4, name: "Martillo", price: 16.5, stock: 16, category: "Herramientas" },
  { id: 5, name: "Piña", price: 12.5, stock: 35, category: "Frutas" },
  { id: 6, name: "Cinta Aislante", price: 5.5, stock: 7, category: "Herramientas" },
  { id: 7, name: "Sandia", price: 20.5, stock: 10, category: "Frutas" },
  { id: 8, name: "Llave Inglesa", price: 14.5, stock: 33, category: "Herramientas" },
  { id: 9, name: "Mandarina", price: 0.5, stock: 12, category: "Frutas" },
  { id: 10, name: "Palanca", price: 35.5, stock: 25, category: "Herramientas" },
]

router.get('/', function (req, res, next) {
	
	res.render('index', { title: 'Productos', products: products });
});

router.post('/', function (req, res, next) {

  products.splice(parseInt(req.body.productId), 1)
  console.log(parseInt(req.body.productId))
	res.render('index', { title: 'Productos', products: products });
});

router.get('/create', function (req, res) {
    
  res.render('create', { title: "Crear Nuevo Producto"});
});

router.post('/create', function (req, res) {
  
  products.push(
    {
      id: 11,
      name: req.body.name,
      price: parseFloat(req.body.price),
      stock: parseInt(req.body.stock),
      category: req.body.category
    }
  )
  res.render('index', { title: 'Productos', products: products });
});

module.exports = router;

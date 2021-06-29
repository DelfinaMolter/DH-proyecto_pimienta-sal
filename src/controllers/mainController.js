// Accions
const mainController={
    home:(req, res) => {res.render('index', {'lista':menu})},
    detalleMenu:(req, res) => {
        let plato = menu.find(function(platillo){
            return platillo.id == req.params.id;
        });
        res.render('detalleMenu',{plato})}
};
// Acá nos falta un objeto literal con las acciones para cada ruta
let menu=[
    {nombre: 'Carpaccio fresco',
    descripcion: 'Entrada Carpaccio de salmón con cítricos',
    precio: 'U$S 65.50',
    imagen: '/images/Carpaccio-de-salmon.jpg',
    id: 1},

    {nombre: 'Risotto de berenjena',
    descripcion: 'Risotto de berenjena y queso de cabra',
    precio: 'U$S 47.00',
    imagen: '/images/Risotto-berenjena-queso-cabra.jpg',
    id: 2},

    {nombre: 'Mousse de arroz',
    descripcion: 'Mousse de arroz con leche y aroma de azahar',
    precio: 'U$S 27.50',
    imagen: '/images/Mouse-de-arroz-con-leche.jpg',
    id: 3},

    {nombre: 'Espárragos blancos',
    descripcion: 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
    precio: 'U$S 37.50',
    imagen: '/images/esparragos.png',
    id: 4}
]

// Export
module.exports = mainController;
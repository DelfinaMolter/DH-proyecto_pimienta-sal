// Modules
const express = require('express');
const app = express();
const path = require('path');

// Config
app.use(express.static(path.resolve(__dirname, '../public')));
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

// Routes App
app.use(require('./routes/mainRouter'))

// Server Start
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => { console.log('Servidor arriba en el puerto http://localhost:'+app.get('port'))});
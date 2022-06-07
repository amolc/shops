var express = require('express');
var app = express();
var path = require('path');
var serveStatic = require('serve-static');
var bodyParser = require("body-parser");
var multer = require('multer');
const upload = multer({ dest: 'uploads/' })


// handle cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
    res.header("Access-Control-Allow-Credentials", false);
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "50mb", extended: true, type: "application/json" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, type: "application/x-www-form-urlencoding" }));
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.raw({ limit: "50mb" }));

app.use('/angular', express.static(__dirname + '/angular'));
app.use('/expresslaptop', express.static(__dirname + '/expresslaptop'));
app.use('/indianmango', express.static(__dirname + '/indianmango'));
app.use('/naturemango', express.static(__dirname + '/naturemango'));
app.use('/spurapp', express.static(__dirname + '/spurapp'));
app.use('/jobsite', express.static(__dirname + '/jobsite'));
app.use('/admin', express.static(__dirname + '/admin'));
app.use('/vueadmin', express.static(__dirname + '/vueadmin/public'));
app.use('/fashion', express.static(__dirname + '/fashion'));
app.use('/stones', express.static(__dirname + '/stones'));
app.use('/fishyhub', express.static(__dirname + '/fishyhub'));
app.use('/stockmarketmantra', express.static(__dirname + '/stockmarketmantra'));
app.use('/mango', express.static(__dirname + '/mango'));
app.use('/second_income', express.static(__dirname + '/second_income'));
app.use('/', express.static(__dirname + '/superadmin'));
app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/expresssg', express.static(__dirname + '/expresssg'));
app.use('/romip', express.static(__dirname + '/romip'));
app.use('/romiresume', express.static(__dirname + '/romiresume'));
app.use('/sventures', express.static(__dirname + '/sventures'));
app.use('/exchange-services', express.static(__dirname + '/exchange-services'));
app.use('/signals', express.static(__dirname + '/signals'));
app.use('/15', express.static(__dirname + '/15'));




global.appRoot = path.resolve(__dirname);
app.listen(19000);
console.log('server is started at port: 19000');
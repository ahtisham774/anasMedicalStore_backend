var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var db = require('./database/database')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
var venderRouter = require('./routes/vender');
var productRouter = require('./routes/product');
var billingRouter = require('./routes/billing');


var app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', usersRouter);
app.use('/vendor', venderRouter);
app.use('/products', productRouter);
app.use('/billing', billingRouter);




// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.setHeader(
        "Access-Control-Allow-Origin",
        "*"
    )
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Types"
    )
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    )
    next(createError(404));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

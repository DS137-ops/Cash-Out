const express = require('express');
const { default: mongoose } = require('mongoose');
const session = require('express-session')
const MongoStrore = require("connect-mongodb-session")(session)
var Store = new MongoStrore({
    uri: "mongodb://localhost:27017/bills",
    collection: "sessions"
})

const app = express();
app.use(session({
    secret: "asdkandlk",
    store: Store,
    resave: true,
    saveUninitialized: true
}))
const path = require('path');

app.use(express.static(path.join(__dirname, 'assests')));
app.use(express.static(path.join(__dirname, 'assets')));
app.set('view engine', 'ejs');
app.set('views', 'views');

const loginroute = require('./routes/login.route')
const homeroute = require('./routes/home.route')
const registerrouter = require('./routes/register.route')
const aboutrouter = require('./routes/about.route')
const billsrouter = require('./routes/bills.route')
const electRoute = require('./routes/elect.route')
const waterRoute = require('./routes/water.route')
const phoneRoute = require('./routes/phone.route')
const netRoute = require('./routes/net.route')
const OtherRoute = require('./routes/other.route')
app.post('/logout', (req, res, next) => {
    req.session.destroy(() => {
        res.redirect('/login')
    })
})
app.use('/', homeroute)
app.use('/', loginroute)

app.use('/register', registerrouter)
app.use('/about', aboutrouter)
app.use('/bills', billsrouter)
app.use('/elect', electRoute)
app.use('/water', waterRoute)
app.use('/phone', phoneRoute)
app.use('/net', netRoute)
app.use('/other', OtherRoute)
app.use('/addelectbill', electRoute)
app.use('/addwaterbill', waterRoute)
app.use('/addphonebill', phoneRoute)
app.use("/addnetbill", netRoute )

app.listen(7000, () => {
    console.log('server is running')
})
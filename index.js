
// Modules

const express = require('express')
const path = require('path')
const chalk = require('chalk')

// Default variables

const app = express();
const PORT = process.env.PORT ?? 3000

// Setting template engine

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'client'))

// Get request

app.get('/', (req, res, next) => {
    res.render('Home/index', {title: 'Hello', active: 'main', intTitle: 'Home Page', link: ''})
})

app.get("/features", (req, res, next) => {
    res.render('Features/index', {title: 'Features Page', active: 'features', intTitle: 'Features Page', link: 'Go Home'})
})

app.get("/aboutme", (req, res, next) => {
    res.render('AboutMe/index', {title: 'Home Page', active: 'aboutme', intTitle: 'About Me', link: 'Go Home'})
})

app.use((req, res, next) => {
    res.status(400)

    if (req.accepts('html')) {
        res.render('Error/index', {url: req.url, title: ''})
        return
    }
    
    if (req.accepts('json')) {
        res.json({ error: 'Not found' });
        return;
      }

    res.type('txt').send('Not found');
})

// Listen

app.listen(PORT, () => {console.log(chalk.green("Server is working..."))})
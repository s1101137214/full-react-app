import express from 'express';
import config from './config.js'
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

const port = 8080;
app.listen(config.port, function listenHandler() {
    console.info(`Running on ${config.port}`);
});
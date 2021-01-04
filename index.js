const app  = require('./app');
const port = process.env.PORT || 443;

app.listen(port, () => {
    if (process.env.NODE_ENV === 'development') {
        console.log(`Example app listening at http://localhost:${port}`);
    }
});
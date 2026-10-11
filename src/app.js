const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log("A aplicação está rodando na porta " + PORT)
})

app.get('/', (req, res) => {
    res.sendFile('views/index.html', { root: __dirname });
});
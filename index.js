const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) =>
    res.json([{
            name: "West",
            email: "me@fash.com",
        },
        {
            name: "Alice",
            email: "alice@gmail.com",
        },
        {
            name: "Jake",
            email: "jam@gmail.com",
        },
        {
            name: "Maria",
            email: "mlove@yahoo.com",
        },
        {
            name: "Roku",
            email: "roku@goku.com",
        },
    ])
);

app.listen(port, () => console.log(`Listening to port:${port}...`));
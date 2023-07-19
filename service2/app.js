const express = require('express')
const app = express()

app.get('', function (req, res) {
    res.send('service 2')
})
app.get('/colors', function (req, res) {
    res.send([{
        color: "cyan",
        value: "#0ff"
    },
    {
        color: "magenta",
        value: "#f0f"
    }])
})

app.listen(4001, () => {
    console.log("port 4001")
})
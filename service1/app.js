const express = require('express')
const app = express()

app.get('', function (req, res) {
    res.send('service 1')
})
app.get('/name', function (req, res) {
    res.send([{
        color: "cyan"
    },
        {
            color: "magenta"
        }])
})

app.listen(4002, () => {
    console.log("port 4001")
})
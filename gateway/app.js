const express = require('express')
const app = express()

const gateway = require('fast-gateway')
const server = gateway({
    routes: [{
        prefix: '/service2',
        target: 'http://localhost:4001'
    },
    {
        prefix: '/service1',
        target: 'http://localhost:4002'
    }
    ]
})

server.start(8080)
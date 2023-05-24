const express = require('express')
const cors = requiere ('cors')

const app = express()
const port: 4200

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(
    express.json({
        type: "*/*"
    })
)

app.use (cors());

app.get('/prueba',(req,res) => {
    res.send('Hola,estoy funcionando')
})

app.post('/transaccion',(req,res) => {
    res.send('Hola,estoy funcionando')
})


app.listen(port,() => {
    console.log(`Estoy ejecutandome en http://localhost:${port}``)
})

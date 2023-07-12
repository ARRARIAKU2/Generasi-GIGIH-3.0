const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/users', (req, res) => {
    res.send('User List');
})

app.post('/users', (req, res) => {
    res.send('Got a POST request at /users')
  })

app.put('/users', (req, res) => {
    res.send('Got a PUT request at /users')
  })

app.delete('/users', (req, res) => {
    res.send('Got a DELETE request at /users')
})

// app.get('/:nama', (req, res) => {
//     res.send(`Hello ${req.params.nama}!`);
// })

app.get('/login', (req, res) => {
    const username = req.query.username; 
    const password = req.query.password;
    res.send(`Username: ${username}, Password: ${password}`);
})

app.get('/product', (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    const product = [
        {
            id: 1,
            name: 'SemsdsdpaDFF'
        },
        {
            id: 2,
            name: 'BsDSFDddH'
        }
    ]
    res.send(JSON.stringify(product));
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
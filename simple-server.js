const express = require('express')
const app = express()
const port = 5000

app.post('/redirect', (req, res) => {
  res.writeHead(302, {
    'Location': '/whatsup'
  });
  res.end();
})

app.get('/', (req, res) => {
    res.send(`
        <html>
            <body>
                <form action="/redirect" method="post">
                    <input data-cy="submit" type="submit" value="Redirect">
                </form>
            </body>
        </html>
    `);
  })

app.get('/whatsup', (req, res) => {
    res.send("<p>Whats up</p>")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
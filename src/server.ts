import * as express from 'express'
const app = express()

app.use(express.static('dist/www'))
app.get('/', (req, res) => {
    res.sendfile('./dist/www/index.html')
})

app.listen(5000)

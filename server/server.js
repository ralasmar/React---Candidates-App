const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api', (req, res) => {
    res.json({ message: "hello from server!" })
})

app.listen(8000, () => {
    console.log('server running on port 3000...')
})
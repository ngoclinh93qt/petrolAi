const express = require('express')

// Create Express app
const app = express()

// A sample route
app.use(express.static(__dirname))
app.get('/', (req, res) => res.sendfile(__dirname + '/index.html'))

// Start the Express server
app.listen(3100, () => console.log('Server running on port 3100!'))
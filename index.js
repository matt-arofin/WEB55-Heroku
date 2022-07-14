const server = require('./api/server')

const PORT = process.env.PORT || 9000;

servr.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
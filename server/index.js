import app from './app.js'
import { config } from './config.js'

const PORT = process.env.PORT || config.port

const server = app.listen(PORT, () => {
	console.log("Listening port", server.address().port)
})
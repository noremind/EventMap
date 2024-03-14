import express, { urlencoded, json } from 'express'
import expressip from 'express-ip'
import routes from './router/index.js'

const app = express()

//Для обработки запросов
app.use(json())
app.use(urlencoded({ extended: false }))

//Что ды лучше следить за клиентом
app.use(expressip().getIpInfoMiddleware)

app.use((req, res, next) => {
	// Website you wish to allow to connect
	res.setHeader("Access-Control-Allow-Origin", "*");

	// Request methods you wish to allow
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, PATCH, DELETE"
	);

	// Request headers you wish to allow
	res.setHeader(
		"Access-Control-Allow-Headers",
		"X-Requested-With,content-type"
	);

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader("Access-Control-Allow-Credentials", true);

	// Pass to next layer of middleware
	next();
});

routes(app)

export default app
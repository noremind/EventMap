import { Router } from 'express'
import { fetchRouter } from '../src/router/routeFetch.js'

const router = Router()

router.use('/name', fetchRouter)

export default (app) => {
	app.use('/api', router)
}
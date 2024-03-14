import { getFetch } from "../controller/getFetch.js";
import { Router } from 'express'

const fetchRouter = Router()

fetchRouter.get('/', (req, res) => {
	getFetch(res)
})

export { fetchRouter }

import express from "express"
import * as steamController from "../Controllers/steam.controller.js"

const router = express.Router()

router.get('/:appid', steamController.games)

export default router

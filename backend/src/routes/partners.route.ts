import { Router } from "express"
import { createPartner } from "../controllers/partnerController"

const router = Router()
router.post('/', createPartner)

export default router


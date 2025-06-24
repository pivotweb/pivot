import { Router } from "express"
import { createMentor } from "../controllers/mentorController"

const router = Router()

router.post('/', createMentor)

export default router


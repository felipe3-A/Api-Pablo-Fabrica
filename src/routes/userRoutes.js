import { Router } from "express";
import{getUser,postUser,deletetUsers,putUsers} from '../controllers/userControllers.js'
const router=Router()

router.get('/usuarios',getUser)
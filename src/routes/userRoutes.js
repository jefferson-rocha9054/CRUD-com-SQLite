import express from 'express'
import { getAllUser, newUser, deleteUser, updateUser, getuserid} from '../controller/userController.js';

const router = express.Router()

router.get('/', getAllUser)
router.post('/user', newUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)
router.get('/:id', getuserid)

export default router;
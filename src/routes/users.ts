import {Router} from 'express';
import {UserController} from '../controllers/UserController';

const userController = new UserController();
const router = Router();
router.get("/", userController.get);
router.post("/", userController.create);

export default router;
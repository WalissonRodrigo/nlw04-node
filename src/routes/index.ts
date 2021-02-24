import { Router } from 'express';
import users from './users'

const routes = Router();

routes.get("/", (req, res) => res.send(`<h1>Welcome NLW4</h1>`))
routes.use("/users", users);

export default routes;
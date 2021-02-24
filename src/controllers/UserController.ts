import { Request, Response } from "express";
import { getConnection, getRepository, Repository } from "typeorm";
import { User } from "../models/User";

class UserController {
  async get(_req: Request, res: Response) {
    const userRepository = getRepository(User);
    const users = await userRepository.find();
    return res.json({ status: 200, data: users });
  }
  async create(req: Request, res: Response) {
    const { body } = req;
    const user = new User();
    Object.keys(body).forEach((key) => {
      user[key] = body[key];
    });
    try {
      const userRepository = getRepository(User);
      await userRepository.save(user);
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
    return res.json({ status: 200, data: { id: user.id, ...user } });
  }
}

export { UserController };

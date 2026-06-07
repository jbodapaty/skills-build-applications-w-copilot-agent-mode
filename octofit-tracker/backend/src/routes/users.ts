import { Router } from 'express';
import { User } from '../models/User';

export const userRouter = Router();

userRouter.get('/', async (_req, res) => {
  const users = await User.find().limit(20).exec();
  res.json(users);
});

userRouter.post('/', async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'name and email are required' });
  }

  const user = new User({ name, email });
  await user.save();

  res.status(201).json(user);
});

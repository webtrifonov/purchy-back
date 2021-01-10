import { validationResult } from 'express-validator';
import { getCustomRepository } from 'typeorm';
import RoleRepository from '../repositories/role.repository';


export const createRole = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ success: 0, errors: errors.array() });
  }
  const { title } = req.body;
  const roleRepository = getCustomRepository(RoleRepository);
  const newRole = await roleRepository.createRole(title);

  res.status(200).json({
    success: 1,
    role: newRole,
  })
}
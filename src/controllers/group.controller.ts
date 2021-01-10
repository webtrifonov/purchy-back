import { getCustomRepository } from 'typeorm';
import GroupRepository from '../repositories/group.repository';

export const getGroups = async (req, res) => {
  const groupRepo = getCustomRepository(GroupRepository);
  const groups = await groupRepo.all({page: req.query.page});
  res.json({
    success: true,
    groups
  });
}

export const createGroup = async (req, res) => {
  const groupRepo = getCustomRepository(GroupRepository);

  const group = await groupRepo.createOne(req.body);
  res.json({
    success: true,
    group,
  })
}

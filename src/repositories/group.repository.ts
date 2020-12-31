import { getCustomRepository } from 'typeorm';
import { EntityRepository } from 'typeorm';
import { Repository } from 'typeorm';
import { Group } from '../entities/Group';
import { Shopping } from '../entities/Shopping';
import constants from '../utils/constants';

interface CreateBody {
  title: string;
}

@EntityRepository(Group)
class GroupRepository extends Repository<Group> {
  all({page}) {

    return this.createQueryBuilder('group')
      .select(['group.id', 'group.title', 'group.createdAt', 'group.updatedAt'])
      .orderBy({
        id: 'ASC',
      })
      .offset((page - 1) * constants.PER_PAGE)
      .limit(constants.PER_PAGE)
      .getMany();
  }

  async seed() {

    const newShopping = new Shopping();
    newShopping.title = 'Пятерочка';
    await this.save(newShopping);
  }

  async createOne(body: CreateBody) {
    const { title } = body;
    const newGroup = new Group();
    newGroup.title = title;
    await this.save(newGroup);

    return newGroup;
  }
}
export default GroupRepository;
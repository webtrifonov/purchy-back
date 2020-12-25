import { EntityManager, Repository, EntityRepository } from 'typeorm';
import { Role } from '../entities/Role';

@EntityRepository(Role)
class RoleRepository extends Repository<Role> {
  createRole(title: string) {
    return this.createQueryBuilder()
      .insert()
      .into(Role)
      .values({
        title,
      })
      .execute();
  }
}
export default RoleRepository;
import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationRepository";
import { getRepository, Repository } from 'typeorm'
class SpecificationRepository implements ISpecificationRepository {

  constructor() {

    this.repository = getRepository(Specification)

  }

  private repository: Repository<Specification>

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ name })

    return specification

  }


  async create({ description, name }: ICreateSpecificationDTO): Promise<Specification> {

    try {

      const specification = this.repository.create({ description, name })

      await this.repository.save(specification)

      return specification

    } catch (e) {

      console.error(e)

      throw new Error(e.message);

    }

  }

}

export { SpecificationRepository }
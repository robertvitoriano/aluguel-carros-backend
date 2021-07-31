import { ISpecificationRepository } from '../../repositories/ISpecificationRepository'

interface IRequest {
  name: string
  description: string
}
class CreateSpecificationUseCase {

  constructor(private SpecificationRepository: ISpecificationRepository) { }

  async execute({ name, description }: IRequest): Promise<void> {

    const specificationAlreadyExists = this.SpecificationRepository.findByName(name)
    if (specificationAlreadyExists) {
      throw new Error("SpecificationAlreadyExists");

    }
    this.SpecificationRepository.create({ name, description })
  }
}

export { CreateSpecificationUseCase }
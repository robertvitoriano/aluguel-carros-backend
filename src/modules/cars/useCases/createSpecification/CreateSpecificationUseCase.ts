import { inject, injectable } from 'tsyringe';
import { Specification } from '../../entities/Specification';
import { ISpecificationRepository } from '../../repositories/ISpecificationRepository'
interface IRequest {
  name: string
  description: string
}
@injectable()
class CreateSpecificationUseCase {

  constructor(
    @inject('SpecificationRepository')
    private SpecificationRepository: ISpecificationRepository) { }

  async execute({ name, description }: IRequest): Promise<Specification> {

    const specificationAlreadyExists = await  this.SpecificationRepository.findByName(name)
    
    if (specificationAlreadyExists) {
      throw new Error("SpecificationAlreadyExists");

    }

    try{

    const specification  = await  this.SpecificationRepository.create({ name, description })

    return specification

    }catch(e){
      
      console.error(e)

      throw new Error(e.message);

    }

  }
}

export { CreateSpecificationUseCase }
import {ISpecificationRepository }from '../../repositories/ISpecificationRepository'

interface IRequest {
  name: string
  description: string
}
class CreateSpecificationService {

  constructor(private SpecificationRepository:ISpecificationRepository){}

  execute({name, description}:IRequest):void{


    const specificationAlreadyExists = this.SpecificationRepository.findByName(name)
    if(specificationAlreadyExists){
      throw new Error("SpecificationAlreadyExists");
      
    }
    this.SpecificationRepository.create({name, description})
  }
}

export { CreateSpecificationService }
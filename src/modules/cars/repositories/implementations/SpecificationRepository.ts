import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {

  private static INSTANCE: SpecificationRepository

  private specifications: Specification[];

  constructor (){

    this.specifications = []
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find((specificationElement)=>specificationElement.name===name)

    return specification

  }

  public static getInstance():SpecificationRepository {

    if(!SpecificationRepository.INSTANCE){
      SpecificationRepository.INSTANCE = new SpecificationRepository()
    }
    
    return  SpecificationRepository.INSTANCE
  }
  
  create({ description, name }: ICreateSpecificationDTO): void {
    
    const specification = new Specification()

    Object.assign(specification,{
      name,
      description,
    })

    this.specifications.push(specification)
    

  }
  
}

export { SpecificationRepository }
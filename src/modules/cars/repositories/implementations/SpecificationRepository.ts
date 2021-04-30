import { Specification } from "../../models/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {

  private specifications: Specification[];

  constructor (){

    this.specifications = []
  }
  findByName(name: string): Specification {
    const specification = this.specifications.find((specificationElement)=>specificationElement.name===name)

    return specification

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
import { CreateSpecificationController} from './CreateSpecificationController'
import {CreateSpecificationUseCase} from './CreateSpecificationUseCase'
import {SpecificationRepository} from './../../repositories/implementations/SpecificationRepository'


export default () =>{
  const specificationRepository = new SpecificationRepository();
  const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository);
  const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)

  return createSpecificationController

}

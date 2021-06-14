import { Request, Response } from 'express'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

class CreateCategoryController  {

  constructor(private createCategoryUseCase:CreateCategoryUseCase) {
      
  }
  handle = (request: Request, response: Response)=>{  
    const{ name, description} = request.body

  try{
    this.createCategoryUseCase.execute({name, description})

  }catch(e){
    console.log('Error',e)
    return response.status(400).json({error:e.message})


  }

  return response.status(201).send()
     

  }
}
export { CreateCategoryController }
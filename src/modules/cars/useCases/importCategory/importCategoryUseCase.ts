import fs from 'fs'
import csvParse from 'csv-parse'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'
import { inject, injectable } from 'tsyringe'
import { Category } from '../../entities/Category'

interface IImportCategory {
  name:string
  description:string
}
@injectable()
class ImportCategoryUseCase {

  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository:ICategoriesRepository){

  }

 async loadCategories(file: Express.Multer.File): Promise<IImportCategory[]>{

    return new Promise((resolve, reject)=>{
      const stream = fs.createReadStream(file.path)
      const categories:IImportCategory[] = []
  
      
      const parseFile = csvParse()
      stream.pipe(parseFile)
  
      parseFile.on("data",async(line)=>{

        const [name, description] = line
    
        categories.push({
          name, 
          description
        })       
  
      }).on("end",()=>{
        fs.promises.unlink(file.path)
        
        resolve(categories)

      }).on("error", (error)=>{

        reject(error)

      })

    })
    
  }

  async execute(file: Express.Multer.File): Promise<Category[]> {

    const categoriesData = await this.loadCategories(file)

    const categoriesPromises = categoriesData.map(({name, description})=>this.categoriesRepository.create({name, description}))

   const categories =  await Promise.all(categoriesPromises)

   return categories

  }
}

export { ImportCategoryUseCase }
import fs from 'fs'
import csvParse from 'csv-parse'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'
class ImportCategoryUseCase {

  constructor(private categoriesRepository:ICategoriesRepository){

  }


  execute(file: Express.Multer.File): void {

    const stream = fs.createReadStream(file.path)

    const parseFile = csvParse()
    stream.pipe(parseFile)

    parseFile.on("data",async(line)=>{

       this.categoriesRepository.create({
         name:line[0],
         description:line[1]
       })
       
    })
  }


}


export { ImportCategoryUseCase }
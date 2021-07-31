import {v4 as uuidV4} from 'uuid'

 class Specification {

  name:String
  description:String
  created_at?:Date
  id?:String
 
  constructor () {
    if (!this.id){
      
      this.id = uuidV4()
    }

    if(!this.created_at){
      this.created_at = new Date()
    }

  }




}


export { Specification }

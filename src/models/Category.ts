import {v4 as uuidV4} from 'uuid'

class Category {

  name:String
  description:String
  created_at:Date
  id?:String
 
  constructor () {
    if (!this.id){
      this.id = uuidV4()
    }

  }



}

export { Category }
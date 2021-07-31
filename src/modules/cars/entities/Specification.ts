import {v4 as uuidV4} from 'uuid'
import {CreateDateColumn, Entity, PrimaryColumn, Column} from  "typeorm"

@Entity('specification')
class Specification {
  @PrimaryColumn()
  id?:String

  @Column()
  name:String

  @Column()
  description:String

  @CreateDateColumn()
  created_at?:Date
 
  constructor () {
    if (!this.id){
      
      this.id = uuidV4()
    }

  }
}

export { Specification }

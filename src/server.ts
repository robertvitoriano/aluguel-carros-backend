import express from 'express'
import swaggerUi from  'swagger-ui-express'
import swaggerConfig from "./swagger.json" 
import morgan from 'morgan'

import { router } from './routes'
import './database'

const app = express()


app.use(express.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig))
app.use(morgan('common'))
app.use(router)


app.listen(3333,()=>{
    console.log('My app is running')
})

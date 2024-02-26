import mongoose, { connect } from 'mongoose'
import { mongourl } from './keys.js'

mongoose.set('strictQuery', true);

export default () => connect(mongourl, { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    .then(() => console.log('Database connected...'))
    .catch(err => console.log(err))
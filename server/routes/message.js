import { Router } from 'express'
import Message from '../models/Message.js'

export default Router()
    .get('/', async (_, res) => {
        try{
            const result = await Message.find()
            res.json({ status: true, result })
        }catch(err){
            res.json({ status: false, message: err })
        }
    })
    .post('/send', async (req, res) => {
        try{
            const result = await Message.create(req.body)
            res.json({ status: true, result, message: 'Successfully sended!' })
        }catch(err){
            res.json({ status: false, message: err })
        }
    })
    .delete('/delete/:id', async (req, res) => {
        try{
            await Message.findByIdAndDelete(req.params.id)
            res.json({ status: true, message: 'Successfully deleted!' })
        }catch(err){
            res.json({ status: false, message: err })
        }
    })